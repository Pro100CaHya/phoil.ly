import { FC, useContext } from "react";

import { SearchUsers } from "@/features/SearchUsers";
import { ShowUsers } from "@/features/ShowUsers";
import { User, getUsers } from "@/shared/api/users";
import { useEffect, useState } from "react";
import { FilterContext, Filter } from "@/app/providers/FilterProvider";
import { UsersContext } from "@/app/providers/UsersProvider";

interface UsersFormProps {
    className?: string;
}

export const UsersForm: FC<UsersFormProps> = (props) => {
    const { setUsers } = useContext(UsersContext);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const {
        filter
    } = useContext(FilterContext);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoad(true);
                const response = await getUsers(
                    { ...filter as Filter },
                    abortController.signal
                );
                
                setUsers?.(response as User[]);
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
            <SearchUsers />
            <ShowUsers
                isLoad={isLoad}
            />
        </>
    );
};