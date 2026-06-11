import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("renders the brand handle", () => {
    render(<Header view="home" onViewChange={() => {}} />);
    expect(screen.getByText("@devmikeroberts")).toBeInTheDocument();
  });

  it("renders nav links", () => {
    render(<Header view="home" onViewChange={() => {}} />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("calls onViewChange with 'projects' when Projects is clicked", async () => {
    const onViewChange = jest.fn();
    render(<Header view="home" onViewChange={onViewChange} />);
    await userEvent.click(screen.getByText("Projects"));
    expect(onViewChange).toHaveBeenCalledWith("projects");
  });

  it("calls onViewChange with 'home' when brand handle is clicked", async () => {
    const onViewChange = jest.fn();
    render(<Header view="home" onViewChange={onViewChange} />);
    await userEvent.click(screen.getByText("@devmikeroberts"));
    expect(onViewChange).toHaveBeenCalledWith("home");
  });

  it("highlights the active view", () => {
    render(<Header view="projects" onViewChange={() => {}} />);
    const btn = screen.getByText("Projects");
    expect(btn.className).toContain("bg-white/15");
  });
});
