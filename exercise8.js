const numbers = [1, 2, 3, 4, 5]

doubleNumbers=(numbers)=> {
  return numbers.map(number => number * 2);
}

console.log(doubleNumbers(numbers)); 