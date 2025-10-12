import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";
import {baseEducationCard, baseExperienceCard} from "shared/ui/TimelineCard";
import { useMultiFetch } from "shared/libs/hooks";
import {AxiosError} from "axios";

jest.mock("shared/libs/hooks/useMultiFetch/useMultiFetch");
const mockedUseMultiFetch = useMultiFetch as jest.MockedFunction<typeof useMultiFetch>;

const data = [[baseExperienceCard], [baseEducationCard]]

describe("AboutPage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("render Loading", () => {
        mockedUseMultiFetch.mockReturnValue({results: [[], []], loading: true, error: null});
        render(<AboutPage />);
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons.length).toBeGreaterThan(0);
    });

    test("Render data", () => {

        mockedUseMultiFetch.mockReturnValue({results: data, loading: false, error: null});
        render(<AboutPage />);
        expect(screen.getByText("Work Experience")).toBeInTheDocument();
        expect(screen.getByText("Education")).toBeInTheDocument();
        expect(screen.getAllByTestId("timeline-card")[0]).toBeInTheDocument();
        expect(screen.getAllByTestId("timeline-card")[1]).toBeInTheDocument();
    });

    test("Failed request", () => {
        mockedUseMultiFetch.mockReturnValue({results: null, loading: false, error: new Error("Network Error") as AxiosError});
        render(<AboutPage />);
        expect(screen.getByText("Work Experience")).toBeInTheDocument();
        expect(screen.getByText("Education")).toBeInTheDocument();
    });
});
