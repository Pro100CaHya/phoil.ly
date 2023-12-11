import "./Form.css";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { classNames } from "@/shared/lib/classNames/classNames";

import { FC, useState } from "react";

interface IFilter {
    email: string,
    number: string
}

interface FormProps {
    className?: string;
    setFilter: (arg: IFilter) => void;
    isEmailNull: boolean;
}

export const Form: FC<FormProps> = (props) => {
    const {
        setFilter,
        isEmailNull
    } = props;

    const [ inputData, setInputData ] = useState<{ email: string; number: string }>({
        email: "",
        number: ""
    });

    return (
        <div className="form">
            <h2 className="form__title">
                Введите данные пользователя
            </h2>
            <div className="form__input">
                <Input
                    mask=""
                    type="email"
                    className="form__input-email"
                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                    placeholder="example@gmail.com"
                />
                <Input
                    mask={"99-99-99"}
                    className="form__input-number"
                    placeholder="11-22-33"
                    onChange={(e) => setInputData({ ...inputData, number: e.target.value })}
                    type="text"
                />
                <p className={
                    classNames(
                        "form__input-message-email",
                        {
                            "form__input-message-email_visible": isEmailNull
                        },
                        []
                    )
                }>
                    Поле email не должно быть пустым
                </p>
            </div>
            <Button
                className={"form__button"}
                onClick={() => setFilter({ ...inputData })}
            >
                Поиск
            </Button>
        </div>
    );
};