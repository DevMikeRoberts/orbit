import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactOverlay } from "@/components/ContactOverlay";

describe("ContactOverlay", () => {
  it("renders the contact email when open", () => {
    render(<ContactOverlay view="contact" onViewChange={() => {}} />);
    expect(screen.getByText("mikerobs238@hotmail.com")).toBeInTheDocument();
  });

  it("email is a mailto link", () => {
    render(<ContactOverlay view="contact" onViewChange={() => {}} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "mailto:mikerobs238@hotmail.com");
  });

  it("calls onViewChange with 'home' when close is clicked", async () => {
    const onViewChange = jest.fn();
    render(<ContactOverlay view="contact" onViewChange={onViewChange} />);
    await userEvent.click(screen.getByLabelText("Close contact"));
    expect(onViewChange).toHaveBeenCalledWith("home");
  });

  it("is aria-hidden when not open", () => {
    const { container } = render(
      <ContactOverlay view="home" onViewChange={() => {}} />,
    );
    const panel = container.firstChild as HTMLElement;
    expect(panel).toHaveAttribute("aria-hidden", "true");
  });
});
