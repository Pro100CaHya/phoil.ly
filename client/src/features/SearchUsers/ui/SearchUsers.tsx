import { FC, useState } from "react";

import { Form } from "@/entities/Form";

interface SearchUsersProps {
    setFilter: (arg: {email: string, number: string}) => void;
}

export const SearchUsers: FC<SearchUsersProps> = (props) => {
    const {
        setFilter
    } = props

    return (
        <Form
            setFilter={setFilter}
        />
    );
};