import React from 'react'
import { useState, Fragment,useEffect} from 'react';
import TodoForm from './todo-form';
import TodoItem from './TodoItem';
import backgroundPhoto from"../images/bg-desktop-light.jpg";
import Footer from './footer.component';
 const TodoList = () => {
    //to retrueve the saved item in local storage we should set the default value
    //of todos to whatever the values saved in local storage.
    const [todos,setTodos] = useState(()=>{
        //get stored value
        const saved = localStorage.getItem("todos");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
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
    //add todo list to local storage
    useEffect(()=>{
        localStorage.setItem("todos" , JSON.stringify(todos));
    },[todos]);
    


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
        <Footer/>
    </Fragment>
  )
}
export default TodoList;
