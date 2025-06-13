// Task 3: addUser(first_name, last_name, email)

export async function addUser(first_name, last_name, email) {
    const url = "http://localhost:3000/users";

    // Obtener todos los usuarios
    const res = await fetch(url);
    const users = await res.json();

    // Calcular nuevo ID
    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;

    // Crear y enviar nuevo usuario
    const newUser = { id: newId, first_name, last_name, email };
    const postRes = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    });

    const result = await postRes.json();
  console.log(result);
}
