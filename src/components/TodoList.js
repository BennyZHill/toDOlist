import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const[todo, setTodo] = useState([])

    return (
        <div>
            <h1>What we gonna do today?</h1>
            <TodoForm/>
        </div>
    );
}

export default TodoList


