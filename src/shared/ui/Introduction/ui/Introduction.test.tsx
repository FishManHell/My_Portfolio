import { render, screen } from '@testing-library/react';
import { Introduction } from './Introduction';

describe("Introduction", () => {
    test("Render", () => {
        render(<Introduction />);
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent("Hi 👋 I’m Denys Zhyvotov, a Front-End / Full-Stack Engineer building modern web applications.");
    });

    test("Render with classes", () => {
        render(<Introduction className="custom-class" />);
        const wrapper = screen.getByTestId('introduction');
        expect(wrapper).toHaveClass('introduction');
        expect(wrapper).toHaveClass('custom-class');
    });
});
