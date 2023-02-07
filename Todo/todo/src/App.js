import Header from "./components/Header";
import Form from "./components/Form"
import { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);  

  return (
    <div className="App">
      <Header></Header>
      <Form 
          todo={todo} 
          setTodo={setTodo} 
          todoList={todoList}   
          setTodoList={setTodoList}>
      </Form>
      {/* <Todo></Todo> */}
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  );
}

export default App;
