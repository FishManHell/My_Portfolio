import { render, screen } from '@testing-library/react';
import { Button, ButtonSize } from './Button';

describe("Button", () => {
    test("Render with children", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
    });

    test("Render with classes", () => {
        render(<Button className="custom-class">Click me</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('custom-class');
    });

    test("Render with def size", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass(ButtonSize.L);
    });

    test('Render with custom size', () => {
        render(<Button size={ButtonSize.XL}>Click me</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass(ButtonSize.XL);
    });

    test("Render with disabled props", () => {
        render(<Button disabled>Click me</Button>);
        const button = screen.getByTestId('button');
        expect(button).toBeDisabled();
    });
});
