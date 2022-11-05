import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {BsEmojiSmile} from 'react-icons/bs';


function App() {
  return (
    
    <div className='todo-app'>
      <div>
      <TodoList />
        <h1>You are awesome!</h1>
        <BsEmojiSmile className='smile-face'/>
      </div>
    </div>
  );
}

export default App;