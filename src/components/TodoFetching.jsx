import { useQuery } from "@tanstack/react-query";

const TodoFetching = () => {
    const fetchTodo = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json());
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodo
    });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An Error Occcurred : { error.message }</div>;

    return (
        <div>
            { data.map(item => (
                <>
                    <h3>Todo: { item.title }</h3>
                    <p>Status: <input type="checkbox" checked={ item.completed } /></p>
                </>
            )) }
        </div>
    );
};

export default TodoFetching;