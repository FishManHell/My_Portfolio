import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { useMultiFetch } from "shared/libs/hooks";
import {projectCards} from "entities/Projects";
import {mockedTechStackList} from "shared/mocks";

jest.mock("shared/libs/hooks/useMultiFetch/useMultiFetch");
const mockedUseMultiFetch = useMultiFetch as jest.MockedFunction<typeof useMultiFetch>;

describe("HomePage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("Render with data", () => {
        mockedUseMultiFetch.mockReturnValue({results: [mockedTechStackList, projectCards], loading: false, error: null});

        render(<HomePage />);
        expect(screen.getByTestId("introduction")).toBeInTheDocument();
        expect(screen.getByTestId("tech-stack")).toBeInTheDocument();
        expect(screen.getByTestId("projects-list")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    test("render Loadings", () => {
        mockedUseMultiFetch.mockReturnValue({results: [null, null], loading: true, error: null});

        render(<HomePage />);
        const techStackSkeletons = screen.getAllByTestId("skeleton");
        expect(techStackSkeletons.length).toBeGreaterThan(0);
    });
});
