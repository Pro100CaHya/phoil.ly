import { FC, useContext } from "react";

import { List } from "@/entities/List";
import { Loader } from "@/shared/ui/Loader/Loader";
import { UsersContext } from "@/app/providers/UsersProvider";
import { NotFound } from "@/shared/ui/NotFound/NotFound";

interface ShowUsersProps {
    isLoad: boolean;
}

export const ShowUsers: FC<ShowUsersProps> = (props) => {
    const {
        isLoad
    } = props;

    const { users } = useContext(UsersContext);

    console.log(isLoad);

    return (
        <div className="list-wrapper">
            {
                isLoad === true
                    ?
                        <Loader />
                    :
                        users?.length === 0
                            ?
                                <NotFound />
                            :
                                <List />
            }
        </div>
    );
};