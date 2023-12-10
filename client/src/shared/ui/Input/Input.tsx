import { FC, InputHTMLAttributes } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        type,
        placeholder,
        onChange
    } = props;

    return (
        <input
            className={classNames("input", {}, [className as string])}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    );
};