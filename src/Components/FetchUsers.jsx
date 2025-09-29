import { useEffect, useState } from "react";

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // this endpoint gives a list of users
        fetch("https://api.github.com/users")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="border p-4 rounded-lg shadow-md text-center"
                >
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-24 h-24 rounded-full mx-auto mb-3"
                    />
                    <h2 className="text-lg font-bold">{user.login}</h2>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                    >
                        View Profile
                    </a>
                </div>
            ))}
        </div>
    );
}

export default FetchUsers;
