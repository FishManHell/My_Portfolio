import { render, screen } from "@testing-library/react";
import TechStackPage from "./TechStackPage";
import { useFetch } from "shared/libs/hooks";
import {mockedTechStackList} from "shared/mocks";

jest.mock("shared/libs/hooks/useFetch/useFetch");
const mockedUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

describe("TechStackPage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("render data by useFetch", () => {
        mockedUseFetch.mockReturnValue({data: mockedTechStackList, loading: false, error: null});

        render(<TechStackPage />);
        const container = screen.getByTestId("tech-stack");
        expect(container).toBeInTheDocument();
        const icons = screen.getAllByTestId("icon");
        expect(icons.length).toBe(mockedTechStackList.length);
    });

    test("test loading", () => {
        mockedUseFetch.mockReturnValue({data: undefined, loading: true, error: null});

        render(<TechStackPage />);
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons.length).toBe(10);
    });
});
