import { delay } from "../shared/lib/delay/delay";
import users from "../shared/data/users/users.json";
import { Users } from "../models/users";

const getByParams = async (email: string, number: string): Promise<Users> => {
    await delay(5000);

    return users.filter((user) => (
        user.email.includes(email)
        && user.number.includes(number)
    ));
}


export {
    getByParams
}