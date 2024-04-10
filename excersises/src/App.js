import "./App.css";
import Counter from "./Lab/Counter";
import Demo from "./Components/Demo";
import StateDemo2 from "./Components/StateDemo2";
import MyCar from "./Components/StateDemo3";
import EmpUsingProp from "./Lab/EmpUsingProp";
import ColorChange from "./Lab/ColorChange";

function App() {
  return (
    <div className="App container">
      <div className="container-fluid">
        <Demo />
        <StateDemo2 />
        <MyCar />
        <Counter />
        <EmpUsingProp FirstName="Abhay" LastName="Panchal" Email="abhayrpanchal@gmail.com" Mobile="9146XXXXXX"/>
        <ColorChange />
      </div>
    </div>
  );
}

export default App;
