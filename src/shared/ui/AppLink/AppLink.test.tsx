import { screen } from '@testing-library/react';
import { AppLink } from './AppLink';
import {renderWithRouter} from "shared/libs/test";

describe("AppLink", () => {
    test("Render with children", () => {
        renderWithRouter(<AppLink to="/test">Go to Test</AppLink>)
        const link = screen.getByTestId('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveTextContent('Go to Test');
    });

    test("Render with class", () => {
        renderWithRouter(<AppLink to="/test" className="custom-class">Go to Test</AppLink>)
        const link = screen.getByTestId('link');
        expect(link).toHaveClass('app-link');
        expect(link).toHaveClass('custom-class');
    });

    test("Presence of 'to' props", () => {
        renderWithRouter(<AppLink to="/test">Go to Test</AppLink>)
        const link = screen.getByTestId('link');
        expect(link.getAttribute('href')).toBe('/test');
    });
});
