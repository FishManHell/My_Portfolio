import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { FC, SVGProps } from 'react';

const TestSvg: FC<SVGProps<SVGSVGElement>> = (props) => <svg {...props} />;

describe("Icon", () => {
    test("Render", () => {
        render(<Icon Svg={TestSvg} />);
        const wrapper = screen.getByTestId('icon');
        expect(wrapper).toBeInTheDocument();
    });

    test("Render with elem", () => {
        render(<Icon Svg={TestSvg} />);
        const svg = screen.getByTestId('icon').querySelector('svg');
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass('icon');
    });

    test("Render with classes", () => {
        render(<Icon Svg={TestSvg} className="custom-class" />);
        const svg = screen.getByTestId('icon').querySelector('svg');
        expect(svg).toHaveClass('icon');
        expect(svg).toHaveClass('custom-class');
    });
});
