// Task 4: delUser(number)

export async function delUser(id) {
    const url = `http://localhost:3000/users/${id}`;

    await fetch(url, { method: "DELETE" });
}
