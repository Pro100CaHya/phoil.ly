import { FC } from "react";

import { List } from "@/entities/List";
import { User } from "@/shared/api/users";

interface ShowUsersProps {
    users: Array<User>
}

export const ShowUsers: FC<ShowUsersProps> = (props) => {
    const {
        users
    } = props;
    
    return (
        <List
            users={users}
        />
    );
};