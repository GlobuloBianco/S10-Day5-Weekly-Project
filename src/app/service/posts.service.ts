import { Post } from "../models/post.interface";

export async function getPosts(): Promise<Post[]> {
    return await (await fetch('http://localhost:3000/lista')).json()

}

