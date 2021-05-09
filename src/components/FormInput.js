const FormInput = () => {
    return (
        <form autoComplete="off">
            <input
                type="text"
                name="todos"
                id="todos"
                placeholder="What needs to be done?"
                required
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default FormInput;
