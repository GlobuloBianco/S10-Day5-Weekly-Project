import { User } from "../models/user.interface"

export async function getUsers(): Promise<User[]> {
    return await (await fetch('http://localhost:3000/utenti')).json()
}

