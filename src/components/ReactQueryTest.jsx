import { useEffect, useState } from 'react';

const ReactQueryTest = () => {
    const [todoData, setTodoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                setTodoData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchTodo();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Todo Item</h1>
            <p>ID: { todoData.id }</p>
            <p>Title: { todoData.title }</p>
            <p>Completed: { todoData.completed ? 'YES' : 'NO' }</p>
        </div>
    );
};

export default ReactQueryTest;