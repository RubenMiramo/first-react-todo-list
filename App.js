import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Build a Todo App', completed: false},
    ]);
const [inputValue, setInputValue] = useState('');

const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
};

const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

const handleFormsubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() !== '') {
        const newTodo = {
          id: todos.length + 1,
          text: inputValue,
          completed: false,
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
      }
    };

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <form onSubmit={handleFormsubmit}>
                <input
                type='text'
                placeholder='Add Todo'
                value={inputValue}
                onChange={handleInputChange}
                />
                <button type='submit'>Add</button>
            </form>
            <TodoList todos={todos} onDelete={handleDelete} />
        </div>
    );
};

export default App;