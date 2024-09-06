import { useQuery } from "@tanstack/react-query";

const UserFetcing = () => {
    const fetchUser = () => {
        return fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json());
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUser
    });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An Error Occcurred : { error.message }</div>;

    return (
        <div>
            { data.map((item, index) => (
                <div key={ index }>
                    { console.log(item) }
                    <p>Name : { item.name }</p>
                    <p>e-mail : { item.email }</p>
                </div>
            )) }
        </div>
    );
};

export default UserFetcing;