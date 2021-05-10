import { useContext, useState } from 'react';
import { DataContext } from './DataProvider';

const FormInput = () => {
    const [todos, setTodos] = useContext(DataContext);
    const  [todoName, setTodoName] = useState('');

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }]);
        setTodoName('');
    }

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input
                type="text"
                name="todos"
                id="todos"
                placeholder="What needs to be done?"
                required
                value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default FormInput;
