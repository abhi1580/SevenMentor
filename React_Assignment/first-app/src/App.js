import "./App.css";
import AlertButton from "./components/AlertButton";
import Flowers from "./components/Flowers";
import Hello from "./components/Hello";
import Person from "./components/Person";

function App() {
  // Parent component of Hello component
  return (
    <div className="">
      <Hello />
      {/* User defined DOM - Child */}
      <Flowers />

      <Person name="Abhay Panchal" gender="Male" age={27} />
      {/* Passing object as prop to person Component */}
      {/* <Person values={{name:"Abhay Panchal",gender:"Male",age:27}}/> */}
      <Person name="Hansraj Jadhav" gender="Male" age={27} />

      <AlertButton/>

    </div>
  );
} // End of parent component App

export default App;
