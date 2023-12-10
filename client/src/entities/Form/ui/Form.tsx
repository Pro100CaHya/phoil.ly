import "./Form.css";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { FC } from "react";

interface IFilter {
    email: string,
    number: string
}

interface FormProps {
    className?: string;
    filter: IFilter;
    setFilter: (arg: IFilter) => void;
}

export const Form: FC<FormProps> = (props) => {
    const {
        filter,
        setFilter
    } = props

    return (
        <div className="form">
            <h2 className="form__title">
                Введите данные пользователя
            </h2>
            <div className="form__input">
                <Input
                    type="email"
                    className="form__input-email"
                    onChange={(e) => setFilter({ ...filter, email: e.target.value })}
                    placeholder="example@gmail.com"
                />
                <p className="form__input-message-email">
                    Требуемый формат: example@gmail.com
                </p>
                <Input
                    className="form__input-number"
                    placeholder="11-22-33"
                    onChange={(e) => setFilter({ ...filter, number: e.target.value })}
                    type="number"
                />
                <p className="form__input-message-number">
                    Требуемый формат: 11-22-33
                </p>
            </div>
            <Button
                className={"form__button"}
            >
                Поиск
            </Button>
        </div>
    );
};