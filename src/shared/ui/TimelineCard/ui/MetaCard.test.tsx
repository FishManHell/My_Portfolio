import {render, screen} from "@testing-library/react";
import {MetaCard} from "./MetaCard";
import {TimelineMetaLabel} from "../module/types/timeLineCardTypes";
import {metaCard} from "../mocks/meta";

describe("MetaCard", () => {
    test("render with date", () => {
        render(<MetaCard {...metaCard} />);
        expect(screen.getByText("2023-09")).toBeInTheDocument();
        expect(screen.getByText("present day")).toBeInTheDocument();
        expect(screen.getByTestId("meta-card")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    test("render COMPANY label", () => {
        render(<MetaCard {...metaCard} label={TimelineMetaLabel.COMPANY}/>);
        expect(screen.getByText("Dnipro")).toBeInTheDocument();
        expect(screen.getByTestId("meta-card")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
});
