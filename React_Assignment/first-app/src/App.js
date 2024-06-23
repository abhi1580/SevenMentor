// import "./App.css";
// import CarTable from "./components/CarTable";
// import Count from "./components/Count";
// import CountState from "./components/CountState";
// import FlowerList from "./components/FlowerList";
// // import AlertButton from "./components/AlertButton";
// import Flowers from "./components/Flowers";
// import Hello from "./components/Hello";
// import Person from "./components/Person";
// import SampleForm from "./components/SampleForm";
// import Toolbar from "./components/Toolbar";
// import ProfileForm from "./components/ProfileForm";
import ProfileFormRevision from "./components/ProfileFormRevision";

function App() {
  // Parent component of Hello component
  return (
    <div className="container">
      {/* <Hello /> */}
      {/* User defined DOM - Child */}
      {/* <Flowers /> */}

      {/* <Person name="Abhay Panchal" gender="Male" age={27} /> */}
      {/* Passing object as prop to person Component */}
      {/* <Person values={{name:"Abhay Panchal",gender:"Male",age:27}}/> */}
      {/* <Person name="Hansraj Jadhav" gender="Male" age={27} /> */}

      {/* <Toolbar/> */}
      {/* <SampleForm/> */}
      {/* <FlowerList/> */}
      {/* <CarTable/> */}
      {/* <Count/> */}
      {/* <CountState/> */}
      {/* <ProfileForm/> */}
      <ProfileFormRevision/>
    </div>
  );
} // End of parent component App

export default App;
