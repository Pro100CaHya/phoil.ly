import { FC } from "react";

import { List } from "@/entities/List";
import { User } from "@/shared/api/users";
import { Loader } from "@/shared/ui/Loader/Loader";

interface ShowUsersProps {
    users: Array<User>;
    isLoad: boolean;
}

export const ShowUsers: FC<ShowUsersProps> = (props) => {
    const {
        users,
        isLoad
    } = props;

    console.log(isLoad);

    return (
        <div className="list-wrapper">
            {
                isLoad === true
                    ?
                        <Loader />
                    :
                        <List
                            users={users}
                        />
            }
        </div>
    );
};