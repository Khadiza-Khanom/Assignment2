const numbers = [1,2,3,4,5,6]
  sumArray=(numbers)=> numbers.reduce((sum, number) => sum + number, 0)


console.log(sumArray(numbers))