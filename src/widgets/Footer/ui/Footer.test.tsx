import {Footer, phoneContact, emailContact, linkedInContact} from "./Footer";
import {render, screen} from "@testing-library/react";

describe("Footer", () => {
    test("render Footer", () => {
        render(<Footer/>);
        const footer = screen.getByTestId("footer")
        expect(footer).toBeInTheDocument();
    });

    test("test links", () => {
        render(<Footer />);

        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(3);

        const [phoneLink, emailLink, linkedInLink] = links;

        expect(phoneLink).toHaveAttribute("href", `tel:${phoneContact}`);
        expect(emailLink).toHaveAttribute("href", `mailto:${emailContact}`);
        expect(linkedInLink).toHaveAttribute("href", linkedInContact);
    });
})
