import { createContext } from "react";
import { User } from "@/shared/api/users";

export interface UsersContextProps {
    users?: User[] | [];
    setUsers?: (users: User[] | []) => void;
}

export const UsersContext = createContext<UsersContextProps>({});