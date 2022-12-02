
export async function getUsers() {
    return await (await fetch('assets/list.json')).json()
}
