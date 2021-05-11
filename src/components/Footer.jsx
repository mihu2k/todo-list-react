import { useState, useContext } from 'react';
import { DataContext } from './DataProvider';

const Footer = () => {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    const newTodosNotComplete = () => {
        return todos.filter(todo => todo.complete === false);
    }

    const deleteTodo = () => {
        setTodos(newTodosNotComplete());
        setCheckAll(false);
    }

    return (
        <>
            {
                todos.length === 0 ? <h2>Congratulations! Nothings to do</h2>
                :   <div className="row">
                        <label htmlFor="all">
                            <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll} />
                            All
                        </label>
                        <p>You have {newTodosNotComplete().length} to do</p>
                        <button id="delete" onClick={deleteTodo}>Delete</button>
                    </div>
            }
        </>
    );
};

export default Footer;
