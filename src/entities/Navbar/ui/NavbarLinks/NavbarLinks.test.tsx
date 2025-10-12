import { screen } from "@testing-library/react";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarItemsList } from "../../module/navbarLinks";
import {renderWithRouter} from "shared/libs/test";

describe("NavbarLinks", () => {
    test("Render", () => {
        renderWithRouter(<NavbarLinks/>)
        const container = screen.getByTestId("navbar-links");
        expect(container).toBeInTheDocument();
    });

    test("Render links", () => {
        renderWithRouter(<NavbarLinks/>)
        const links = screen.getAllByTestId("link");
        expect(links).toHaveLength(NavbarItemsList.length);
    });

    test("Render links with path", () => {
        renderWithRouter(<NavbarLinks/>)
        const links = screen.getAllByTestId("link");

        links.forEach((link, index) => {
            expect(link).toHaveAttribute("href", NavbarItemsList[index].path);
        });
    });

    test("Render links with text", () => {
        renderWithRouter(<NavbarLinks/>)
        NavbarItemsList.forEach(item => expect(screen.getByText(item.text)).toBeInTheDocument());
    });

    test("Render with extra class", () => {
        renderWithRouter(<NavbarLinks className={"extra-class"}/>);
        const container = screen.getByTestId("navbar-links");
        expect(container).toHaveClass("extra-class");
    });
});
