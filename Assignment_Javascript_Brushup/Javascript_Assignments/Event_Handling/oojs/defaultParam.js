//parameters with default values
function add(a=10,b=20){
    return a+b;
}
let result=add(10) //here value of b is default value 20
console.log("Addition is :"+result)
result=add() //here value of a and b are default 
console.log("Addition is :"+result)

result=add(undefined,200) //here value of a is undefined so default value will assigned to a 
console.log("Addition is :"+result)

result=add(200,undefined) //here value of b is undefined so default value will assigned to b
console.log("Addition is :"+result)

result=add(undefined,undefined) //here value of a and b are undefined so default value will assigned to a and b
console.log("Addition is :"+result)

function mul(a=10,b=a,c=a*b){
    return c;
}

result=mul()
console.log(`Result is ${result}`) //100

result=mul(5)
console.log(`Result is ${result}`)//25


result=mul(5,8)
console.log(`Result is ${result}`)//40


result=mul(5,8,3)//3
console.log(`Result is ${result}`)