import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLink } from './AppLink';

describe("AppLink", () => {
    test("Render with children", () => {
        render(
            <MemoryRouter>
                <AppLink to="/test">Go to Test</AppLink>
            </MemoryRouter>
        );
        const link = screen.getByTestId('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveTextContent('Go to Test');
    });

    test("Render with class", () => {
        render(
            <MemoryRouter>
                <AppLink to="/test" className="custom-class">Go to Test</AppLink>
            </MemoryRouter>
        );
        const link = screen.getByTestId('link');
        expect(link).toHaveClass('app-link');
        expect(link).toHaveClass('custom-class');
    });

    test("Presence of 'to' props", () => {
        render(
            <MemoryRouter>
                <AppLink to="/test">Go to Test</AppLink>
            </MemoryRouter>
        );
        const link = screen.getByTestId('link');
        expect(link.getAttribute('href')).toBe('/test');
    });
});
