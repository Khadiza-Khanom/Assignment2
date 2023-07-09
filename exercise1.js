const obj = { name: 'John', age: 30, city: 'New York' };


const arr = [10, 20, 30, 40];

function destructuredExample(newObj, newArr){
  
const {name,age,city} = newObj
const [first,second,third] = newArr
const result={
  name:name,
  age:third

}
  
console.log(result)

}
destructuredExample(obj,arr)