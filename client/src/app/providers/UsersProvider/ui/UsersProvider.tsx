import { useState, FC, PropsWithChildren } from "react";

import { UsersContext } from "../lib/UsersContext";
import { User } from "@/shared/api/users";

const UsersProvider: FC<PropsWithChildren> = (props) => {
    const {
        children
    } = props;

    const [users, setUsers] = useState<User[]>([]);
    
    return (
        <UsersContext.Provider value={{
            users,
            setUsers
        }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;