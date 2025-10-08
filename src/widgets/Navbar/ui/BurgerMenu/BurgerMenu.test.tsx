import { render, screen, fireEvent } from "@testing-library/react";
import { BurgerMenu } from "./BurgerMenu";

describe("BurgerMenu", () => {
    test("renders button with default classes", () => {
        const onToggleMock = jest.fn();
        render(<BurgerMenu isOpen={false} onToggle={onToggleMock} />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("burger-menu");
        expect(button).not.toHaveClass("active");
    });

    test("active class isOpen", () => {
        const onToggleMock = jest.fn();
        render(<BurgerMenu isOpen={true} onToggle={onToggleMock} />);

        const button = screen.getByRole("button");
        expect(button).toHaveClass("burger-menu", "active");
    });

    test("calls onToggle when clicked", () => {
        const onToggleMock = jest.fn();
        render(<BurgerMenu isOpen={false} onToggle={onToggleMock} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(onToggleMock).toHaveBeenCalledTimes(1);
    });

});