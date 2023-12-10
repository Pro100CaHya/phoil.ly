import "./Form.css";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { FC, useState } from "react";

interface IFilter {
    email: string,
    number: string
}

interface FormProps {
    className?: string;
    setFilter: (arg: IFilter) => void;
}

export const Form: FC<FormProps> = (props) => {
    const {
        setFilter
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
                    type="email"
                    className="form__input-email"
                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                    placeholder="example@gmail.com"
                />
                <p className="form__input-message-email">
                    Требуемый формат: example@gmail.com
                </p>
                <Input
                    className="form__input-number"
                    placeholder="11-22-33"
                    onChange={(e) => setInputData({ ...inputData, number: e.target.value })}
                    type="number"
                />
                <p className="form__input-message-number">
                    Требуемый формат: 11-22-33
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