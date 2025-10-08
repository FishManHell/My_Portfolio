import { render, screen } from '@testing-library/react';
import { Introduction } from './Introduction';

describe("Introduction", () => {
    test("Render", () => {
        render(<Introduction />);
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(/Hi 👋 My name is Denys Zhyvotov, and I'm a Front-End Developer/);
    });

    test("Render with classes", () => {
        render(<Introduction className="custom-class" />);
        const wrapper = screen.getByTestId('introduction');
        expect(wrapper).toHaveClass('introduction');
        expect(wrapper).toHaveClass('custom-class');
    });
});
