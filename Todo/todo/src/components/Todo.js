import styles from '../style.module.css'; // 2 dots because its 2 folder back

const Todo = ({todoItem, todoList, setTodoList})=>{

    const deleteTodo = ()=>{
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));  
    }

    return (<div>
        <div className={styles.todoitem }>
            <h3 className={styles.todoname}>{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.deletebtn}>Done</button>
        </div>
    </div>)
};

export default Todo;