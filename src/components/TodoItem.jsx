import React from 'react'
import { useState } from 'react';
import { SlNote } from "react-icons/sl";
import { CiCircleRemove } from "react-icons/ci";
import {BiCheck} from "react-icons/bi";
import TodoForm from './todo-form';

 const TodoItem = (props) => {
    const defaultEditItem = {
      id : null,
      text: ""
    }
    const [editItem, setEditItem] = useState(defaultEditItem);

   const todos = props.todos;
   
   const {removeTodo,editTodo,todoComplete} = props;
   

   const editHandler = (item) =>{
    setEditItem(item);
   }
  const edit = ( id, newText) =>{
    editTodo(id, newText);
    setEditItem(defaultEditItem);
  }
  
  if(editItem.id){
    return <TodoForm edit={editItem} onSubmit = {edit} ></TodoForm>
  }
  return (
    todos.map((item) =>{
        return (
          <div className='todo-item' key={item.id}>
            <div className='item-title-container'>
              <input className='checkbox-input' type="checkbox" onChange={()=>{todoComplete(item.id)}}>
                
              </input>
              <p className={item.isComplete? "completed-item":""}>{item.text}</p>
            </div>
            
            <div className="buttons-container">
            
            <SlNote onClick={() => editHandler(item)} size={18}/>
            <CiCircleRemove onClick={() => removeTodo(item.id)} size={20}/>
            </div>
          </div>
        
        )
    }
    )
  )
}
export default TodoItem;
