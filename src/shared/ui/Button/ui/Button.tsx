import cls from "./Button.module.scss"
import classNames from "classnames"
import {ButtonHTMLAttributes} from "react";

export enum ButtonSize {
    M = "size-m",
    L = "size-l",
    XL = "size-xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    disabled?: boolean;
    size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
    const {className, disabled, size = ButtonSize.L, children, ...restProps} = props;

    return (
        <button
            className={classNames(cls["button"], [className, cls[size]])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
};