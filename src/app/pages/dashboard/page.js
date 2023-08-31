import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    const users = getUsers();
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Lista de Usuários:</h2>
            <ul>
                {users?.map((user, index) => (
                    <li key= {index}>{user.name}, {user.email}</li>
                ))}
            </ul>
        </div>
    );
};