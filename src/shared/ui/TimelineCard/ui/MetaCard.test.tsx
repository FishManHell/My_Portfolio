import { render, screen } from "@testing-library/react";
import { MetaCard } from "./MetaCard";
import {TimelineCardMeta, TimelineMetaLabel} from "../module/types/timeLineCardTypes";

describe("MetaCard", () => {
    test("render with date", () => {
        const meta: TimelineCardMeta = {
            icon: "calendar",
            text: "",
            label: TimelineMetaLabel.DATE,
            date: { from: "2023-09", to: "present day" },
        };

        render(<MetaCard {...meta} />);

        expect(screen.getByText("2023-09")).toBeInTheDocument();
        expect(screen.getByText("present day")).toBeInTheDocument();
        expect(screen.getByTestId("meta-card")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    test("render COMPANY label", () => {
        const meta: TimelineCardMeta = {
            icon: "location_marker",
            text: "Dnipro",
            label: TimelineMetaLabel.COMPANY,
        };

        render(<MetaCard {...meta} />);
        expect(screen.getByText("Dnipro")).toBeInTheDocument();
        expect(screen.getByTestId("meta-card")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});
