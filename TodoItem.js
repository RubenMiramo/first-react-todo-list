import react from 'react';

const  TodoItem = ({ todo, onDelete }) => {
  return (
    <div className='todo-item'>
      <input 
      type='checkbox'
      checked={todo.completed}
      onChange= {() => {}} // Handle checkbox onChange
       />
       <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
       <button onClick={ () => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;