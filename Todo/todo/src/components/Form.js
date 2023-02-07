import { useState } from 'react';
import styles from '../style.module.css'; // 2 dots because its 2 folder back

import shortid from 'shortid';

    const Form = ({todo, setTodo, todoList, setTodoList})=>{ 

    const handleChange=(event)=>{
        setTodo(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id:shortid.generate()}]);//3 dots means it will take all the previous values as well
        console.log(todoList);
        setTodo("");
    };



    return(
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input type="text" className={styles.todoinput} onChange={handleChange} placeholder="Add Todo Item" value={todo}></input>
                <button type='submit' className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}

export default Form;

