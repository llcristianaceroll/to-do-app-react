import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateToDoButton from './CreateToDoButton';

const todos = [
  { text: 'Go to the gym', completed: true},
  { text: 'Fix bug', completed: false},
  { text: 'Study English', completed: false},
]
function App() {
  return (
    
 <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map( todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
   </TodoList>
   <CreateToDoButton/>
 </React.Fragment>
  );
}

export default App;
