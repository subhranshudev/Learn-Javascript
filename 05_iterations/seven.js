// In JavaScript, the "map" method is used to create a new array by applying a function to each element 
// in an original array. It is especially useful when we need to transform elements in an array
// without modifying the original one.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10 )

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40)

console.log(newNums);