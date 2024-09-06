import { useQuery } from "@tanstack/react-query";

const MyFetchingTodo = () => {
    const fetchTodo = () => {
        return fetch('http://localhost:5000/api/todo')
        .then(response => response.json());
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodo
    });

    return (
        <div>
            {data.map(item => (
                <div key={ item.id }>
                    <input type="checkbox" checked={ item.status } />
                    { item.text }
                </div>
            ))}
        </div>
    );
};

export default MyFetchingTodo;