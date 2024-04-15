import React from 'react'
// import Fruit from './fruit';
export default function FruitList() {
    const fruits=[{
        id:1,
        name:"Apple",
        price:40
    },
    {
        id:2,
        name:"Mango",
        price:50
    },
    {
        id:3,
        name:"Banana",
        price:20
    },
    {
        id:4,
        name:"Orange",
        price:30
    }];  // fruits .map(x=>x*2)
    const fruitList=fruits.map(f=><h3 key={f.id}>{f.id} {f.name}</h3>)
    fruits.splice(1,1);
    // const fruitList1=fruits.map(fruit=><Fruit f={fruit}/>)
    const fruitList1=fruits.map(f=><h3 key={f.id}>{f.id} {f.name}</h3>)
  return (
    <div>
      <h1>{fruitList}</h1><br/>
      <h1>{fruitList1}</h1> 
    </div>
  )
}
