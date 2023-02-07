import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import CondtionalComponent from './components/ConditionalComponents';
import Product from './components/Product';
import Fruits from './components/Fruits';
import Form from './components/Form';
import Todo from './components/Todo';
import InlineComponent from './components/InlineComponent';
import StylesheetComponent from './components/StylesheetComponent';
import ModuleComponent from './components/ModuleComponent';

function App() {
  return (
    <div className="App">
        {/* <Hello></Hello>
        <Message messagecontent="This is a msg from props"></Message>
        <Profile name="Raph" lname="Mallari"></Profile>
        <Counter></Counter>
        <Resume name="RAPH"></Resume>
        <FunctionEvent></FunctionEvent>
        <ClassEvent></ClassEvent>
        <FunctionalCounter></FunctionalCounter>
        <CondtionalComponent></CondtionalComponent>
        <Product></Product>
        <Fruits></Fruits>
        <Form></Form> */}
        <Todo></Todo>
        <InlineComponent></InlineComponent>
        <StylesheetComponent></StylesheetComponent>
        <ModuleComponent></ModuleComponent>
    </div>
  );
}

export default App;
