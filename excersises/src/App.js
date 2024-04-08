import "./App.css";
import Counter from "./Components/Counter";
import Demo from "./Components/Demo";
import StateDemo2 from "./Components/StateDemo2";
import MyCar from "./Components/StateDemo3";

function App() {
  return (
    <div className="App container">
      <div className="container-fluid">
      <Demo />
      <StateDemo2 />
      <MyCar/>
      <Counter/>
    </div>
    </div>
  );
}

export default App;
