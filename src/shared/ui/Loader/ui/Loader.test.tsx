import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe("Loader", () => {
    test("render", () => {
        render(<Loader />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
    });

    test("render with classes", () => {
        render(<Loader className="custom-class" />);
        const loader = screen.getByTestId('loader');
        expect(loader).toHaveClass('lds-ellipsis');
        expect(loader).toHaveClass('custom-class');
    });
});
