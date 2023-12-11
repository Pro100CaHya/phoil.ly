import { FC, useState } from "react";

import { Form } from "@/entities/Form";

interface SearchUsersProps {
    setFilter: (arg: {email: string, number: string}) => void;
    isEmailNull: boolean;
}

export const SearchUsers: FC<SearchUsersProps> = (props) => {
    const {
        setFilter,
        isEmailNull,
    } = props

    return (
        <Form
            setFilter={setFilter}
            isEmailNull={isEmailNull}
        />
    );
};