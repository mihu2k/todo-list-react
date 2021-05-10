import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'));
        if (todoStore.length > 0) setTodos(todoStore);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos));
    }, [todos]);

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataProvider;
