import { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (value) => {
    if(value.length) {
      const newTodo = {
        name: value,
        completed: false
      }

      setTodoList([
        ...todoList,
        newTodo
      ]);
    }
  }

  const handleRemove = (itemIndex) => {
    const newTodoList = [...todoList];
    newTodoList.splice(itemIndex, 1);
    setTodoList(newTodoList);
  }

  const handleComplete = (itemIndex) => {
    const newTodoList = [...todoList];
    newTodoList[itemIndex].completed = true;
    setTodoList(newTodoList);
  }


  return (
    <div className="container">
      <Form addTodo={addTodo} />
      {todoList && 
        <TodoList todoList={todoList} removeTodo={handleRemove} completeTodo={handleComplete} />
      }
    </div>
  );
}

export default App;
