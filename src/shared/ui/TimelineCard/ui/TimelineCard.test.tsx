import { render, screen } from "@testing-library/react";
import { TimelineCard } from "./TimelineCard";
import {baseExperienceCard} from "../mocks/baseCards";

describe("TimelineCard", () => {
    test("renders skeletons when loading", () => {
        render(<TimelineCard loading />);
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons.length).toBeGreaterThan(0);
    });

    test("renders timeline card with date", () => {
        render(<TimelineCard timelineCard={baseExperienceCard} />);

        const title = screen.getByText(baseExperienceCard.title);
        const type = screen.getByText(baseExperienceCard.type);

        expect(title).toBeInTheDocument();
        expect(type).toBeInTheDocument();

        const metaElements = screen.getAllByTestId("meta-card");
        baseExperienceCard.meta.forEach((meta, index) => {
            const metaEl = metaElements[index];

            if (meta.date) {
                expect(metaEl).toHaveTextContent(meta.date.from);
                expect(metaEl).toHaveTextContent(meta.date.to);
            } else {
                expect(metaEl).toHaveTextContent(meta.text);
            }
        });
    });

    test("test with custom className", () => {
        render(<TimelineCard timelineCard={baseExperienceCard} className="custom-class" />);
        const card = screen.getByText(baseExperienceCard.title).closest("article");
        expect(card).toHaveClass("custom-class");
    });
});