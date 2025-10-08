import { render, screen } from "@testing-library/react";
import { TimelineCard } from "./TimelineCard";
import {TimeLineCard, TimelineMetaLabel} from "../module/types/timeLineCardTypes";

describe("TimelineCard", () => {
    const mockCard: TimeLineCard = {
        "id": "1",
        "title": "Dnipro University of Technology",
        "type": "Remote",
        "meta": [
            {
                "icon": "location_marker",
                "text": "Dnipro",
                "label": TimelineMetaLabel.COMPANY
            },
            {
                "icon": "calendar",
                "text": "Sep 2023 - present day",
                "label": TimelineMetaLabel.DATE,
                "date": {
                    "from": "2023-09",
                    "to": "present day"
                }
            }
        ]
    }

    test("renders skeletons when loading", () => {
        render(<TimelineCard loading />);
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons.length).toBeGreaterThan(0);
    });

    test("renders timeline card with date", () => {
        render(<TimelineCard timelineCard={mockCard} />);

        const title = screen.getByText(mockCard.title);
        const type = screen.getByText(mockCard.type);

        expect(title).toBeInTheDocument();
        expect(type).toBeInTheDocument();

        const metaElements = screen.getAllByTestId("meta-card");
        mockCard.meta.forEach((meta, index) => {
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
        render(<TimelineCard timelineCard={mockCard} className="custom-class" />);
        const card = screen.getByText(mockCard.title).closest("article");
        expect(card).toHaveClass("custom-class");
    });
});