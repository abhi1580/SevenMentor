function test(...a){
console.log("Size of rest parameters : ",a.length) 
//If we use for..in loop then index numbers will be printed and if we use for..of loop then it will print value on that particular index
for(ele of a){
    console.log(ele)
}
}
test()
test(52,78,-12)
test(20,"Hello",true,-12.5)
console.log("***************************************************")
function fun(x,y,...args){
console.log("X : ",x)
console.log("Y : ",y)

console.log("Size of rest parameter : ",args.length)
for(ele of args)
    console.log(ele)
}

fun(10,20,true,20,40,true,false)
fun("Hello","Afternoon",40,true,false)



