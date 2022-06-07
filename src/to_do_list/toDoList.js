import { useState } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') return;
        setToDoList((prev) => [toDo, ...prev]);
        setToDo('');
    }
    return (
        <div>
            <h1>My To Do List ({toDoList.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={toDo}
                    onChange={onChange}
                    placeholder='Write your to do...'
                />
                <button>add to do</button>
            </form>
            <hr />
            <ul>
                {
                toDoList.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
                }
            </ul>
        </div>
    )
}

export default ToDoList;