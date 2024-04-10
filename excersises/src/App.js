import "./App.css";
import Counter from "./Lab/Counter";
import Demo from "./Components/Demo";
import StateDemo2 from "./Components/StateDemo2";
import MyCar from "./Components/StateDemo3";
import EmpUsingProp from "./Lab/EmpUsingProp";
import ColorChange from "./Lab/ColorChange";
import EventHandling from "./Components/EventHandling3";
import EventHandling4 from "./Components/EventHandling4";

function App() {
  return (
    <div className="App container">
      <div className="container-fluid">
        <Demo /><hr/>
        <StateDemo2 /><hr/>
        <MyCar /><hr/>
        <Counter /><hr/>
        <EmpUsingProp
          FirstName="Abhay"
          LastName="Panchal"
          Email="abhayrpanchal@gmail.com"
          Mobile="9146XXXXXX"
        /><hr/>
        <EventHandling/><hr/>
        <EventHandling4/><hr/>
        <ColorChange /><hr/>
      </div>
    </div>
  );
}

export default App;
