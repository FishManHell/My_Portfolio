import { render, screen } from "@testing-library/react";
import { ResizeContainer } from "./ResizeContainer";

jest.mock('react-resize-detector', () => ({
    useResizeDetector: () => ({ width: 500, height: 200 }),
}));

describe("ResizeContainer", () => {
    test("renders content with width and height", () => {
        const renderContentMock = jest.fn((w, h) => (
            <div data-testid="content">{`Width: ${w}, Height: ${h}`}</div>
        ));

        render(<ResizeContainer renderContent={renderContentMock} />);
        expect(renderContentMock).toHaveBeenCalledWith(500, 200);

        const content = screen.getByTestId("content");
        expect(content).toBeInTheDocument();
        expect(content).toHaveTextContent("Width: 500, Height: 200");
    });

    test("applies extra className", () => {
        const renderContentMock = jest.fn(() => <div>Render</div>);

        render(<ResizeContainer className="my-class" renderContent={renderContentMock} />);

        const container = screen.getByTestId("resize-container");
        expect(container).toHaveClass("resize-container my-class");
    });
});
