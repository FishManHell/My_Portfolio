import { render, screen } from "@testing-library/react";
import { useFetch } from "shared/libs/hooks";
import ProjectsPage from "./ProjectsPage";
import {ProjectsListProps} from "entities/Projects";
import { projectCards } from "entities/Projects/mocks/projectsCard";

jest.mock("shared/libs/hooks/useFetch/useFetch");
const mockedUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

// Mocked ProjectList without Carousel component
jest.mock("entities/Projects", () => ({
    ProjectsList: ({ projects, projectsLoading }: ProjectsListProps) => (
        <div data-testid="projects-list-mock">
            {projectsLoading
                ? "loading"
                : projects?.map((p) => (
                    <div key={p.id} data-testid="card">
                        {p.title}
                    </div>
                ))}
        </div>
    ),
}));

describe("ProjectsPage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("Render loading", () => {
        mockedUseFetch.mockReturnValue({data: undefined, loading: true, error: null});
        render(<ProjectsPage />);
        expect(screen.getByText("loading")).toBeInTheDocument();
    });

    test("Render data from hook", () => {
        mockedUseFetch.mockReturnValue({data: projectCards, loading: false, error: null});
        render(<ProjectsPage />);
        const cards = screen.getAllByTestId("card");
        expect(cards).toHaveLength(3);
    });

    test("combine classes", () => {
        mockedUseFetch.mockReturnValue({data: projectCards, loading: false, error: null});
        const { container } = render(<ProjectsPage className="custom-class" />);
        expect(container.firstChild).toHaveClass("projects-page");
        expect(container.firstChild).toHaveClass("custom-class");
    });
});

