// Task 2: listUsers()

export async function listUsers() {
    try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error al traer usuarios:", error);
    }
}
