import { Fragment } from 'react';
import {React, useState} from 'react'
    

 const TodoForm = (props) => {
    const [text,setText] = useState("");
    
    
    //reset input
    
    const onChangeHandler = (event) =>{
        const {value} = event.target;
        setText(value);
        
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(props.edit){
            const passedId = props.edit.id;
            props.onSubmit(passedId, text);
            setText("");
        } else{
            props.onSubmit({
                id : Math.floor(Math.random() * 10000),
                text: text
            });
            setText("");
        }
        
    }
  return (
    <div>
        
        <form onSubmit={submitHandler}>
            {
                props.edit? (
                    
                    <Fragment>
                        <div className='form-container'>
                            <input placeholder='type to update' type='text' onChange={onChangeHandler} name="text" value={text}></input>
                            <button type="submit">Submit</button>
                            <button>cancel</button>
                        </div>
                        
                    </Fragment>
                ) : (
                    <Fragment>
                        <input placeholder='what is your todo item?' type='text' onChange={onChangeHandler} name="text" value={text}></input>
                        <button type="submit">Submit</button>
                    </Fragment>
                )
            }
            
        </form>
    </div>
  )
}
export default TodoForm;
