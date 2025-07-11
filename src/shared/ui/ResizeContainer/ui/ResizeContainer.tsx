import classNames from "classnames";
import {ReactNode, useRef} from "react";
import {useResizeDetector, useResizeDetectorProps} from "react-resize-detector";

interface ResizeContainerProps extends Omit<useResizeDetectorProps<HTMLDivElement>, 'targetRef'> {
    className?: string;
    renderContent: (width: number, height: number) => ReactNode;
}

export const ResizeContainer = (props: ResizeContainerProps) => {
    const {className, renderContent, ...useResizeProps} = props;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const {width = 0, height = 0} = useResizeDetector({targetRef: containerRef, ...useResizeProps});

    return (
        <div className={classNames("resize-container", className)} ref={containerRef}>
            {renderContent(width, height)}
        </div>
    );
};
