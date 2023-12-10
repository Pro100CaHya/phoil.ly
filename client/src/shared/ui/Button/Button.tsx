import { FC, ButtonHTMLAttributes } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        onClick
    } = props;

    return (
        <button
            className={classNames("button", {}, [className as string])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};