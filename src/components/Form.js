import { useState } from "react";

const Form = ({addTodo}) => {
    const [formInput, setFormInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(formInput);
        setFormInput('');
    }
    return (
        <form className="inputContainer" onSubmit={handleSubmit}>
        <input type="text" onChange={e => setFormInput(e.target.value)} value={formInput} />
        <button type="submit">Add</button>
      </form>
    );
}

export default Form;
