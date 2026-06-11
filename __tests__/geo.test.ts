import { latLngToVector3 } from "@/lib/geo";
import * as THREE from "three";

describe("latLngToVector3", () => {
  it("returns a THREE.Vector3", () => {
    const v = latLngToVector3(0, 0, 1);
    expect(v).toBeInstanceOf(THREE.Vector3);
  });

  it("north pole is at top (positive Y) with radius 1", () => {
    const v = latLngToVector3(90, 0, 1);
    expect(v.y).toBeCloseTo(1);
    expect(v.x).toBeCloseTo(0);
    expect(v.z).toBeCloseTo(0);
  });

  it("south pole is at bottom (negative Y) with radius 1", () => {
    const v = latLngToVector3(-90, 0, 1);
    expect(v.y).toBeCloseTo(-1);
  });

  it("scales proportionally with radius", () => {
    const r = 5;
    const v = latLngToVector3(90, 0, r);
    expect(v.y).toBeCloseTo(r);
  });

  it("equator at lng 0 lands on the X axis with zero Y and Z", () => {
    const v = latLngToVector3(0, 0, 1);
    expect(v.y).toBeCloseTo(0);
    expect(Math.abs(v.x)).toBeCloseTo(1);
    expect(v.z).toBeCloseTo(0);
  });
});
