/* Create two arrays of different states in India
    First array named northStates should contain any 4 north side states of India
    Second array named southStates should contain any 2 south side states of India
*/
let northStates = ["Himachal Pradesh", "Uttarakhand", "Punjab", "Haryana"];
let southStates = ["Andhra Pradesh", "Telangana"];

//Concatenate southStates to northStates and store them in nsStates array variable
// let nsStates=northStates.concat(southStates)
//OR
let nsStates = [...northStates, ...southStates];

//Iterate over the nsStates using for..of loop to display concatenated list of states
// for(ele of nsStates){
//     console.log(ele)
// }
//Clone the nsStates array
let clonednsStates = [...nsStates];

//Iterate over cloned array using traditional for loop to display all the elements
for (i = 0; i < clonednsStates.length; i++) {
  console.log(clonednsStates[i]);
}
console.log(
  "**********************************************************************************************************************************************************"
);
//Destructure the cloned array into elements
let [s1, s2, s3, s4, s5, s6] = clonednsStates;

//Display destructured array
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
