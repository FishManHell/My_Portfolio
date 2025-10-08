import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
    test("render", () => {
        render(<Skeleton />);
        const skeleton = screen.getByTestId("skeleton");
        expect(skeleton).toBeInTheDocument();
    });

    test("add custom className", () => {
        render(<Skeleton className="custom-class" />);
        const skeleton = screen.getByTestId("skeleton");
        expect(skeleton).toHaveClass("custom-class");
    });

    test("add styles", () => {
        render(<Skeleton height={100} width="50%" border="10px" />);
        const skeleton = screen.getByTestId("skeleton");

        expect(skeleton).toHaveStyle({
            height: "100px",
            width: "50%",
            borderRadius: "10px",
        });
    });

    test("test without props", () => {
        render(<Skeleton />);
        expect(screen.getByTestId("skeleton")).toBeInTheDocument();
    });
});
