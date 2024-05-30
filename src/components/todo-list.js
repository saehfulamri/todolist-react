import React from "react";
import { TodoItem } from "./todo-item";

export function TodoList() {
    React.useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then((response) => response.json())
            .then((todos) => setTasks(todos.todos))
            .catch();
    }, []);

    const [tasks, setTasks] = React.useState([]);

    const [todo, setTodo] = React.useState("");

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            todo,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTodo("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            })
        );
    };

    return (
        <div>
            <input
                value={todo}
                type="text"
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={() => addTask(todo)}>Add Todo</button>
            {tasks.map((task, index) => {
                return (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                );
            })}
        </div>
    );
}
