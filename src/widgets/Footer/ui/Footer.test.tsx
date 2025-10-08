import {Footer} from "./Footer";
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

        expect(phoneLink).toHaveAttribute("href", "tel:+972532201230");
        expect(emailLink).toHaveAttribute("href", "mailto:denyszhyvotov@gmail.com");
        expect(linkedInLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/denys-zhyvotov-8683611b9/"
        );
    });
})
