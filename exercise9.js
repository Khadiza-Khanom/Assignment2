
const numbers = [1,2,3,4,5,6]

filterEvenNumbers=(numbers)=> {
  return numbers.filter(number => number % 2 === 0);
}

console.log(filterEvenNumbers(numbers))