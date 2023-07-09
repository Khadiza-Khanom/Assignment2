sumNumbers = (...numbers) => {
    let sum = 0
    let i = 0
    for (i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i]
    }
    console.log(sum)
  
  
  }
  sumNumbers(1, 2, 3, 4, 5,6,7)