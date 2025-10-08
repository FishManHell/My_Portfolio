import {SectionHeader} from "./SectionHeader";
import {render, screen} from "@testing-library/react";

describe("SectionHeader", () => {
    test("renders title, subtitle and custom className", () => {
        render(<SectionHeader title="Title" subtitle="Subtitle" className="custom" />);

        const container = screen.getByTestId("section-header");
        expect(container).toBeInTheDocument();
        expect(container).toHaveClass("custom");
        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Subtitle")).toBeInTheDocument();
    });

    test("renders nothing if no title and subtitle", () => {
        render(<SectionHeader />);
        expect(screen.getByTestId("section-header")).toBeInTheDocument();
    });
});