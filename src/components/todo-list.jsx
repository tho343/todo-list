import React from 'react'
import { useState, Fragment} from 'react';
import TodoForm from './todo-form';
import TodoItem from './TodoItem';
import backgroundPhoto from"../images/bg-desktop-light.jpg";

 const TodoList = () => {
    
    const [todos,setTodos] = useState([]);
    //add item to todo list 
    const addItem = (item) =>{
        if(!item.text){
            return;
        }
        const newItem = {
            id : item.id,
            text: item.text
        }
        setTodos([...todos, newItem]);
        
    }
    //delete item from todo list with the supplied id
    const removeTodo = (id) =>{
        const newArr = todos.filter((item) =>{
            return item.id !== id;
        })
        setTodos(newArr);
    }
    //edit item with the supplied id an text
    const editTodo = (id, newText) => {
        if(!newText) return;
        const newArray = todos.map(item => {
            return item = item.id === id ? {
                id : id,
                text : newText
            } : item
        })
        
        setTodos(newArray);
    }
    //todo is complete
    const todoComplete = (id) =>{
        const newArr = todos.map(item =>{
            if(id === item.id){
                item.isComplete = !item.isComplete;
            }
            return item;
        })
        setTodos(newArr);
    }

  return (
    
    <Fragment>
        
        <div className='todo-form-container'>
            <img className='background-banner-image' src={backgroundPhoto} alt="background photo dark"/>
            <h1>to do</h1>
            <TodoForm onSubmit ={addItem}/>
        </div>
        <div className='todo-container'>
            <div className='items-container'>
                <TodoItem todos={todos} removeTodo={removeTodo} editTodo={editTodo} todoComplete={todoComplete}/>
            </div>
            
        </div>
        
    </Fragment>
  )
}
export default TodoList;
