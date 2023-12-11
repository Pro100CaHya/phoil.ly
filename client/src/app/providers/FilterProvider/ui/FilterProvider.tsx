import { useState, FC, PropsWithChildren } from "react";

import { FilterContext } from "../lib/FilterContext";

const FilterProvider: FC<PropsWithChildren> = (props) => {
    const {
        children
    } = props;

    const [filter, setFilter] = useState({
        email: "",
        number: ""
    });
    
    return (
        <FilterContext.Provider value={{
            filter,
            setFilter
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;