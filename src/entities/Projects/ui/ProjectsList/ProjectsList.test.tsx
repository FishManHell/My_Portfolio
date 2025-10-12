import { render, screen, within } from "@testing-library/react";
import { ProjectsList } from "./ProjectsList";
import {projectCards as mockProjects} from "../../mocks/projectsCard"
import {ReactNode} from "react";

jest.mock("react-multi-carousel", () => {
    return ({ children }: {children: ReactNode}) => {
        return <div data-testid="carousel">{children}</div>
    }
});

describe("ProjectsList", () => {
    test("Render loading", () => {
        render(<ProjectsList projectsLoading />);
        const carousel = screen.getByTestId("carousel");
        const skeletons = within(carousel).getAllByTestId("skeleton");
        expect(skeletons.length).toBeGreaterThan(0);
    });

    test("Render projects", () => {
        render(<ProjectsList projects={mockProjects} projectsLoading={false} />);
        const carousel = screen.getByTestId("carousel");
        const projectCards = within(carousel).getAllByTestId("card");
        expect(projectCards).toHaveLength(mockProjects.length);
        const titles = within(carousel).getAllByText("Weather application");
        expect(titles.length).toBe(mockProjects.length);
    });

    test("Render title section", () => {
        render(<ProjectsList />);
        expect(screen.getByTestId("projects-list")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Things I’ve built so far")).toBeInTheDocument();
    });

});