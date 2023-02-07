import styles from '../style.module.css'; // 2 dots because its 2 folder back
import Todo from './Todo';

const TodoList = ({todoList, setTodoList})=>{
    return (<div>
        TodoList
        {todoList.map((todoItem)=>(
            <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList}></Todo>
        ))}
    </div>)
};

export default TodoList;