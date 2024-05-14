let arr = [10, 20, 30];

//merging one array into another
let arr1 = [40, 20, ...arr, 90, 100];
console.log(arr1);

let arr2 = [400, 200, ...arr];
console.log(arr2);

let arr3 = [...arr,400, 200, 6000];
console.log(arr3);
