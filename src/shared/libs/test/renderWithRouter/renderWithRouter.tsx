import { ReactNode } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";
import { render } from "@testing-library/react";

/**
 * Renders a component with React Router context.
 * Useful for components that rely on routing.
 *
 * @param ui - The component to render.
 * @param options - Optional router config (initial entries, etc.)
 */
export function renderWithRouter(
    ui: ReactNode,
    options: MemoryRouterProps = { initialEntries: ["/"] }
) {
    return render(<MemoryRouter {...options}>{ui}</MemoryRouter>);
}
