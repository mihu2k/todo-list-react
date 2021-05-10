import { useState } from 'react';

const ListItem = ({ todo, id, checkComplete, handleEditTodo }) => {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.name);

    const handleOnEdit = () => {
        setOnEdit(true);
    }

    const handleSave = id => {
        setOnEdit(false);
        editValue ? handleEditTodo(editValue, id) : setEditValue(todo.name);
    }

    if (onEdit) {
        return (
            <li>
                <input type="text" id="editValue" name="editValue" value={editValue} onChange={e => setEditValue(e.target.value)} />
                <button onClick={() => handleSave(id)}>Save</button>
            </li>
        );
    } else {
        return (
            <li>
                <label htmlFor={id} className={todo.complete ? 'active' : ''}>
                    <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkComplete(id)} />
                    {todo.name}
                </label>
                <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
            </li>
        );
    }
};

export default ListItem;
