import { render, screen } from '@testing-library/react';
import { Card, CardTheme } from './Card';

describe("Card", () => {
    test("Render with children", () => {
        render(<Card><p>Card content</p></Card>);

        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
        expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    test("Add default classes", () => {
        render(<Card className="custom-class" />);
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('card');
        expect(card).toHaveClass(CardTheme.NORMAL);
        expect(card).toHaveClass('custom-class');
    });

    test('add custom classes', () => {
        render(<Card theme="custom-theme" />);
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('card');
        expect(card).toHaveClass('custom-theme');
    });
});
