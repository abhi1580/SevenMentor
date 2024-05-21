let arr=[10,20,30,40,50]
//destructuring all array values
// let [a,b,c,d,e]=arr
// console.log("a: ",a)
// console.log("b: ",b)
// console.log("c: ",c)
// console.log("d: ",d)
// console.log("e: ",e)

//destructuring first two values
let [a,b,,,,]=arr
console.log("a: ",a)
console.log("b: ",b)

let [c1,c2=100,c3,c4,c5,c6=100,c7]=arr

console.log("c1: ",c1)
console.log("c2: ",c2)//will not take from array destructiring
console.log("c3: ",c3)
console.log("c4: ",c4)
console.log("c5: ",c5)
console.log("c6: ",c6)//has nt array destructing value so default value will be taken
console.log("c7: ",c7)

//using rest syntax

let [x1,x2,...args]=arr
console.log("x1: ",x1)
console.log("x2: ",x2)
console.log("args: ",args)

function fun([a,b,c]){
   return a+b+c 
}
let arr1=[56,4,23]

let result=fun(arr1)

console.log("result : ",result)

function getCities(){
    return ["Pune","Mumbai","Nagpur","Nasik"]
}

let [city1,city2,city3,city4]=getCities()
console.log("city1: ",city1)
console.log("city2: ",city2)
console.log("city3: ",city3)
console.log("city4: ",city4)

