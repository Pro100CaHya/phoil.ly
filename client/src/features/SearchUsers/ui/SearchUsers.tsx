import { FC, useState } from "react";

import { Form } from "@/entities/Form";

interface SearchUsersProps {
    filter: IFilter;
    setFilter: (arg: {email: string, number: string}) => void 
}

interface IFilter {
    email: string;
    number: string;
}

export const SearchUsers: FC<SearchUsersProps> = (props) => {
    const {
        filter,
        setFilter
    } = props

    return (
        <Form
            filter={filter}
            setFilter={setFilter}
        />
    );
};