import { useContext, useState, useEffect, useRef } from 'react';
import { DataContext } from './DataProvider';

const FormInput = () => {
    const [todos, setTodos] = useContext(DataContext);
    const  [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }]);
        setTodoName('');
        todoInput.current.focus();
    }

    useEffect(() => {
        // console.log(todoInput);
        todoInput.current.focus();
    }, []);

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input
                type="text"
                name="todos"
                id="todos"
                placeholder="What needs to be done?"
                required
                value={todoName}
                ref={todoInput}
                onChange={e => setTodoName(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default FormInput;
