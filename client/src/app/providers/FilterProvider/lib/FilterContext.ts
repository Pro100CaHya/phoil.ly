import { createContext } from "react";

export interface Filter {
    email: string;
    number: string;
}

export interface FilterContextProps {
    filter?: Filter;
    setFilter?: (filter: Filter) => void
}

export const FilterContext = createContext<FilterContextProps>({});