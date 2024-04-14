import "./App.css";
import Counter from "./Lab/Counter";
import Demo from "./Components/Demo";
import StateDemo2 from "./Components/StateDemo2";
import MyCar from "./Components/StateDemo3";
import EmpUsingProp from "./Lab/EmpUsingProp";
import ColorChange from "./Lab/ColorChange";
import EventHandling from "./Components/EventHandling3";
import EventHandling4 from "./Components/EventHandling4";
import ListDemo from "./Components/ListDemo";
import FruitList from "./Components/FruitList";
import CounterUsingUseState from "./Components/CounterUsingUseState";
import ColorChangeUsingUseState from "./Lab/ColorChangeUsingUseState";
import ColorChange2 from "./Components/ColorChange2";
import FunctionalComponent from "./Components/FunctionalComponent";
import ChangeColorTextByButton from "./Lab/ChangeColorTextByButton";

function App() {
  return (
    <div className="App container">
      <div className="container-fluid">
        <Demo />
        <hr />
        <StateDemo2 />
        <hr />
        <MyCar />
        <hr />
        <Counter />
        <hr />
        <EmpUsingProp
          FirstName="Abhay"
          LastName="Panchal"
          Email="abhayrpanchal@gmail.com"
          Mobile="9146XXXXXX"
        />
        <hr />
        <ListDemo />
        <FruitList />
        <EventHandling />
        <hr />
        <EventHandling4 />
        <hr />
        <ColorChange />
        <hr />
        <CounterUsingUseState />
        <hr />
        <ColorChange2 />
        <hr />
        <FunctionalComponent id="1" name="John" />
        <ColorChangeUsingUseState />
        <hr />
        <ChangeColorTextByButton/><hr/>
      </div>
    </div>
  );
}

export default App;
