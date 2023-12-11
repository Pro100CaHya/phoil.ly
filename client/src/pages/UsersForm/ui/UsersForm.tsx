import { FC } from "react";

import { SearchUsers } from "@/features/SearchUsers";
import { ShowUsers } from "@/features/ShowUsers";
import { User, getUsers } from "@/shared/api/users";
import { useEffect, useState } from "react";

interface UsersFormProps {
    className?: string;
}

export const UsersForm: FC<UsersFormProps> = (props) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isEmailNull, setIsEmailNull] = useState<boolean>(false);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [filter, setFilter] = useState<{ email: string; number: string }>({
        email: "",
        number: ""
    });

    const changeFilters = (newFilter: { email: string; number: string }) => {
        if (newFilter.email === "") {
            setIsEmailNull(true);
            return;
        }

        if (
            filter.email === newFilter.email
                && filter.number === newFilter.number
        ) {
            return;
        }

        setIsEmailNull(false);
        setFilter({ ...newFilter });
    }

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
                setFilter={changeFilters}
                isEmailNull={isEmailNull}
            />
            <ShowUsers
                users={users}
                isLoad={isLoad}
            />
        </>
    );
};