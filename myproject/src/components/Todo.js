import { useState } from "react"
import ListItem from "./ListItem";

export default function Todo(){

    const[todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);

    const handleChange = (event)=>{ //handleChange makes the input dynamic
        setTodo(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault(); // prevents page from reloading on form submit

        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(tempList);

        setTodo("");
    }

    return (<div>Todo
        <form>
            <input type="text" onChange={handleChange} value={todo}></input>
            <button type="submit" onClick={handleSubmit}> Add </button>
        </form>

        {todoList.map((item)=>(
            // <h3>{item}</h3>
            <ListItem key={item} name={item}>List Item</ListItem>
        ))}
    </div>);
}