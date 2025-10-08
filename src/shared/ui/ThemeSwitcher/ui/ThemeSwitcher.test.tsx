import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "app/providers/ThemeProvider";

jest.mock("app/providers/ThemeProvider", () => ({
    useTheme: jest.fn(),
}));

describe("ThemeSwitcher", () => {
    const toggleTheme = jest.fn();

    beforeEach(() => (useTheme as jest.Mock).mockReturnValue({ toggleTheme }));

    afterEach(() => jest.clearAllMocks());

    test("render ThemeSwitcher ", () => {
        render(<ThemeSwitcher />);
        expect(screen.getByTestId("button")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    test("call toggleTheme by click", () => {
        render(<ThemeSwitcher />);
        fireEvent.click(screen.getByTestId("button"));
        expect(toggleTheme).toHaveBeenCalledTimes(1);
    });

    test("add custom className", () => {
        render(<ThemeSwitcher className="custom-class" />);
        expect(screen.getByTestId("button")).toHaveClass("custom-class");
    });

    test("add isOpenBurgerMenu props", () => {
        render(<ThemeSwitcher isOpenBurgerMenu />);
        expect(screen.getByTestId("button").className).toMatch(/theme-switcher-opened-burger-menu/);
    });
});