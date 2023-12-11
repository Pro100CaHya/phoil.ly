import { classNames } from "@/shared/lib/classNames/classNames";

import "./List.css";
import { FC, useContext } from "react";
import { User } from "@/shared/api/users";
import { UsersContext } from "@/app/providers/UsersProvider";

export const List: FC = () => {
    const { users } = useContext(UsersContext);

    return (
        <>
            <ul className={classNames("list", {}, [])}>
                {
                    users?.map((user: User) => (
                        <li key={user.id} className="list__item">
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