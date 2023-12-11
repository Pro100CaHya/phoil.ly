import "./Form.css";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUnmaskedNumber } from "@/shared/lib/getUnmaskedNumber/getUnmaskedNumber";

import { FC, useContext, useState } from "react";
import { FilterContext } from "@/app/providers/FilterProvider";

interface FormProps {
    className?: string;
}

export const Form: FC<FormProps> = (props) => {
    const {
        setFilter
    } = useContext(FilterContext);

    const [ inputData, setInputData ] = useState<{ email: string; number: string }>({
        email: "",
        number: ""
    });

    const handleSearch = () => {
        if ( inputData.email.length === 0) {
            return;
        }

        setFilter?.({ ...inputData });
    }

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
                    onChange={(e) => setInputData({ ...inputData, number: getUnmaskedNumber(e.target.value) })}
                    type="text"
                />
                <p className={
                    classNames(
                        "form__input-message-email",
                        {
                            "form__input-message-email_visible": inputData.email.length === 0
                        },
                        []
                    )
                }>
                    Поле email не должно быть пустым
                </p>
            </div>
            <Button
                className={"form__button"}
                onClick={() => handleSearch()}
            >
                Поиск
            </Button>
        </div>
    );
};