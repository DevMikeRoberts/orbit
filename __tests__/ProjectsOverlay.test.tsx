import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsOverlay } from "@/components/ProjectsOverlay";

describe("ProjectsOverlay", () => {
  it("renders the 'Projects' heading when open", () => {
    render(<ProjectsOverlay view="projects" onViewChange={() => {}} />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders the Orbit project card", () => {
    render(<ProjectsOverlay view="projects" onViewChange={() => {}} />);
    expect(screen.getByText("Orbit")).toBeInTheDocument();
  });

  it("links Orbit card to GitHub", () => {
    render(<ProjectsOverlay view="projects" onViewChange={() => {}} />);
    const links = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.includes("github"));
    expect(links.length).toBeGreaterThan(0);
  });

  it("calls onViewChange with 'home' when close is clicked", async () => {
    const onViewChange = jest.fn();
    render(<ProjectsOverlay view="projects" onViewChange={onViewChange} />);
    await userEvent.click(screen.getByLabelText("Close projects"));
    expect(onViewChange).toHaveBeenCalledWith("home");
  });

  it("is aria-hidden when not open", () => {
    const { container } = render(
      <ProjectsOverlay view="home" onViewChange={() => {}} />,
    );
    const panel = container.firstChild as HTMLElement;
    expect(panel).toHaveAttribute("aria-hidden", "true");
  });
});
