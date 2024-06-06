import React from "react";
import "./Person.css";

// const Person = (props) => {
//   return (
//     <div>
//       <h1  className="person-info">
//         Hello {props.name}, your are {props.gender} of {props.age} years old.
//       </h1>
//     </div>
//   );
// };

// export default Person;

// const Person = (props) => {
//   const personName = props.name;
//   const personAge = props.age;
//   const personGender = props.gender;
//   return (
//     <div>
//       <h1 className="person-info">
//         Hello {personName}, your are {personGender} of {personAge} years old.
//       </h1>
//     </div>
//   );
// };

// export default Person;
const Person = ({ name, age, gender }) => {
  return (
    <div>
      <h1 className="person-info">
        Hello {name}, your are {gender} of {age} years old.
      </h1>
    </div>
  );
};

export default Person;

//Reading the values of object passed to the perosn component from the parent compoenent App

//   const Person = ({values}) => { //object destructuring is performed here.

//     return (
//       <div>
//         <h1 className="person-info">
//           Hello {values.name}, your are {values.gender} of {values.age} years old.
//         </h1>
//       </div>
//     );
//   };

//   export default Person;
