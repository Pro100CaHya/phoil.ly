import { classNames } from "@/shared/lib/classNames/classNames";

import "./List.css";
import { FC } from "react";
import { User } from "@/shared/api/users";

interface UsersListProps {
    users: Array<User>
}

export const List: FC<UsersListProps> = (props) => {
    const {
        users
    } = props;

    return (
        <>
            <ul className={classNames("list", {}, [])}>
                {
                    users.map((user: User) => (
                        <li key={user.number} className="list__item">
                            <p className="list__item-email">
                                email: {user.email}
                            </p>
                            <p className="list__item-number">
                                number: {user.number}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};