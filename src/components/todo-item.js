const styleDiv = {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0",
    gap: "10px",
};

export function TodoItem({ task, deleteTask, toggleCompleted }) {
    const handleChange = () => {
        toggleCompleted(task.id);
    };

    return (
        <div style={styleDiv}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.todo}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}
