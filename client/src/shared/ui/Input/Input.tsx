import { FC, InputHTMLAttributes } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    mask: string;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        type,
        placeholder,
        onChange,
        mask
    } = props;

    return (
        <InputMask
            mask={mask}
            className={classNames("input", {}, [className as string])}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    );
};