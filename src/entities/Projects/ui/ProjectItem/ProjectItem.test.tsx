import { render, screen } from "@testing-library/react";
import { ProjectItem } from "./ProjectItem";
import {projectCard} from "../../mocks/projectsCard"

describe("ProjectItem", () => {
    test("Render loading", () => {
        render(<ProjectItem loading />);
        const skeletons = screen.getAllByTestId("skeleton");
        expect(skeletons.length).toBeGreaterThan(0);
    });

    test("Render card with data", () => {
        render(<ProjectItem project={projectCard} />);

        const card = screen.getByTestId("card");
        expect(card).toBeInTheDocument();

        expect(screen.getByText(projectCard.title)).toBeInTheDocument();
        expect(screen.getByText(projectCard.description)).toBeInTheDocument();
        expect(screen.getByText("HTML, JavaScript, SASS, React")).toBeInTheDocument();
        expect(screen.getByText("PC")).toBeInTheDocument();
        const img = screen.getByAltText("project-img") as HTMLImageElement;
        expect(img.src).toContain(projectCard.img);
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(projectCard.links.length);
        expect(links[0]).toHaveAttribute("href", "https://github.com/FishManHell");
        const icons = screen.getAllByTestId("icon");
        expect(icons).toHaveLength(projectCard.links.length);
    });

    test("Render with extra class", () => {
        render(<ProjectItem project={projectCard} className="extra-class" />);
        const card = screen.getByTestId("card");
        expect(card).toHaveClass("extra-class");
    });
});
