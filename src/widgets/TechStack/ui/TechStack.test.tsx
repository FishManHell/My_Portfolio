import { render, screen } from "@testing-library/react";
import { TechStack } from "./TechStack";
import {mockedTechStackList} from "shared/mocks";

describe("TechStack", () => {
    test("renders section header", () => {
        render(<TechStack techStackList={[]} />);
        expect(screen.getByText("Tech Stack")).toBeInTheDocument();
        expect(
            screen.getByText("Technologies I’ve been working with recently")
        ).toBeInTheDocument();
    });

    test("renders TechStackSkeleton when loading", () => {
        render(<TechStack techStackLoading={true} />);
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons.length).toBeGreaterThan(0);
    });

    test("renders icons when techStackList is provided", () => {
        render(<TechStack techStackList={mockedTechStackList} />);
        const icons = screen.getAllByTestId("icon");
        expect(icons.length).toBe(2);
    });

    test("applies custom className", () => {
        const { container } = render(<TechStack className="custom-class" />);
        expect(container.firstChild).toHaveClass("custom-class");
    });
});