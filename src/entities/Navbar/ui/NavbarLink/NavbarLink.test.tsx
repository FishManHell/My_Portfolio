import { screen } from "@testing-library/react";
import { NavbarLink } from "./NavbarLink";
import {renderWithRouter} from "shared/libs/test";

describe("NavbarLink", () => {
    const mockItem = {
        path: "/projects",
        text: "Projects",
    };

    const setup = (props?: {className?: string}) => {
        renderWithRouter(<NavbarLink item={mockItem} {...props} />)
    }

    test("Render text link", () => {
        setup();
        expect(screen.getByText("Projects")).toBeInTheDocument();
    });

    test("Render correct path", () => {
        setup();
        const link = screen.getByTestId("link");
        expect(link).toHaveAttribute("href", "/projects");
    });

    test("Render with default module class", () => {
        setup();
        const link = screen.getByTestId("link");
        expect(link.className).toMatch(/navbar-link-item/);
    });

    test("Add extra class", () => {
        setup({ className: "extra-class" });
        const link = screen.getByTestId("link");
        expect(link).toHaveClass("extra-class");
    });
});
