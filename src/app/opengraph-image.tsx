import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020818 0%, #0a1628 50%, #040d1e 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Star field */}
        {[
          [80, 60], [200, 120], [350, 40], [500, 90], [650, 30], [800, 110],
          [950, 55], [1100, 80], [150, 200], [400, 180], [700, 170], [1050, 200],
          [50, 300], [250, 340], [600, 310], [900, 290], [1150, 330],
          [130, 450], [380, 480], [720, 440], [1000, 470], [1170, 400],
          [30, 550], [310, 570], [580, 540], [870, 560], [1120, 580],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: i % 5 === 0 ? 3 : 2,
              height: i % 5 === 0 ? 3 : 2,
              borderRadius: "50%",
              background: i % 7 === 0 ? "#93c5fd" : "#e2e8f0",
              opacity: 0.4 + (i % 4) * 0.15,
            }}
          />
        ))}

        {/* Globe ring decoration */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: "50%",
            transform: "translateY(-50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1.5px solid rgba(59,130,246,0.25)",
            boxShadow: "0 0 60px rgba(59,130,246,0.1), inset 0 0 60px rgba(59,130,246,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "1px solid rgba(96,165,250,0.2)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: 96,
            gap: 0,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3b82f6",
                boxShadow: "0 0 8px #3b82f6",
              }}
            />
            <span
              style={{
                fontSize: 16,
                letterSpacing: "0.2em",
                color: "#60a5fa",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Portfolio
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#f8fafc",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Michael
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#f8fafc" }}>Roberts</span>
            <span style={{ color: "#3b82f6" }}>.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "#94a3b8",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Software Engineer · Builder · Lifelong Learner
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent 0%, #1d4ed8 30%, #3b82f6 50%, #1d4ed8 70%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
