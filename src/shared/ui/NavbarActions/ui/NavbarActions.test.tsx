import { render, screen } from "@testing-library/react";
import { NavbarActions } from "./NavbarActions";

jest.mock("shared/ui/ThemeSwitcher", () => ({
    ThemeSwitcher: () => <div data-testid="theme-switcher" />,
}));

describe("NavbarActions", () => {
    test("render", () => {
        render(<NavbarActions />);
        expect(screen.getByTestId("navbar-actions")).toBeInTheDocument();
    });

    test("test CV download link", () => {
        render(<NavbarActions />);
        const downloadLink = screen.getByTitle("Download CV") as HTMLAnchorElement;
        expect(downloadLink).toBeInTheDocument();
        expect(downloadLink).toHaveAttribute("download");
    });

    test("render LinkedIn link", () => {
        render(<NavbarActions />);
        const linkedinLink = screen.getByRole("link", { name: "" }) as HTMLAnchorElement;
        expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    test("render ThemeSwitcher", () => {
        render(<NavbarActions />);
        expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
    });

    test("test with isOpenBurgerMenu props", () => {
        const { container } = render(<NavbarActions isOpenBurgerMenu />);
        const navbar = container.firstChild as HTMLElement;
        expect(navbar.className).toContain("burger-navbar-actions-opened");
    });
});
