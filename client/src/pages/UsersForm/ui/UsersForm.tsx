import { FC } from "react";

import { SearchUsers } from "@/features/SearchUsers";
import { ShowUsers } from "@/features/ShowUsers";
import { User, getUsers } from "@/shared/api/users";
import { useEffect, useState } from "react";

interface UsersFormProps {
    className?: string;
}

export const UsersForm: FC<UsersFormProps> = (props) => {  
    const [ users, setUsers ] = useState<User[]>([]);
    const [ filter, setFilter ] = useState<{ email: string; number: string }>({
        email: "",
        number: ""
    })

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers({
                ...filter
            });

            setUsers(data);
        }

        fetchUsers();
    }, []);

    return (
        <>
            <SearchUsers
                filter={filter}
                setFilter={setFilter}
            />
            <ShowUsers
                users={users}
            />
        </>
    );
};