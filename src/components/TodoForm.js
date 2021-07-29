import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput.apply(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random()* 10000),
        //     text: input
        // });
        setInput ('')
    };
    
    return (
      <form className='todo-form' onSubmit={handleSubmit}>
            <input type ='text' 
            placeholder='ADD to me'
            value={input}
            name='text' 
            className='todo-input'
            onChange = {handleChange}
            />
        <button className='todo-button>'>DO THIS
         </button> 
      </form>
    )
}

export default TodoForm
