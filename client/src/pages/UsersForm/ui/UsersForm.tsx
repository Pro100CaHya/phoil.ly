import { FC, useRef } from "react";

import { SearchUsers } from "@/features/SearchUsers";
import { ShowUsers } from "@/features/ShowUsers";
import { User, getUsers } from "@/shared/api/users";
import { useEffect, useState } from "react";

interface UsersFormProps {
    className?: string;
}

export const UsersForm: FC<UsersFormProps> = (props) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [filter, setFilter] = useState<{ email: string; number: string }>({
        email: "",
        number: ""
    });

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoad(true);
                const response = await getUsers(
                    { ...filter },
                    abortController.signal
                );
                
                setUsers(response);
                setIsLoad(false);
            } catch (error) {
                if (!abortController.signal.aborted) {
                    console.error("Error");
                    setIsLoad(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        }
    }, [filter]);

    return (
        <>
            <SearchUsers
                setFilter={setFilter}
            />
            <ShowUsers
                users={users}
                isLoad={isLoad}
            />
        </>
    );
};