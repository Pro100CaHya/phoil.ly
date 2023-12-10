import { Request, Response } from "express";
import * as UsersService from "../services/users";

const getByParams = async (req: Request, res: Response) => {
    const email: string = req.query.email as string;
    const number: string = req.query.number as string;

    try {
        const users = await UsersService.getByParams(email ?? "", number ?? "");

        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export {
    getByParams
}