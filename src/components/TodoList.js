const TodoList = ({todoList, removeTodo, completeTodo}) => {
    return(
        <ul className="list">
          {todoList.map(({name, completed}, index) => 
            <li key={`todo-${index}`}>
              <p>{name}</p>
              <button onClick={() => removeTodo( index)}>x</button>
              {completed ? <label>Completed!!!</label> : <button onClick={() => completeTodo(index)}>complete</button>}
            </li>
          )}
        </ul>
    );
}

export default TodoList;
