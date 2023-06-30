//let marks=Array(6) we cannot redeclare the array with let keyword
var marks=new Array(20,38,16,28,37)

let numbers=[39,182,282,0,18]
//console.log(numbers)
console.log(numbers[3])
numbers[3]=922// re assigning the values
console.log(numbers.length)// to find the length of the array
numbers.push(1000) // adding new elements to array
numbers.pop() // to delete the elements at last index .. pop method won't take any argument
numbers.unshift(8000)// to add the elements at the beginning of the array
console.log(numbers.length)

console.log(numbers)
numbers.splice(1,1)// to delete the elements at specific indext here 1st argument indicates staring index and end argument indicates how many elements to remove

console.log(numbers)

console.log(numbers.includes(182))// to check specific element presence... result is boolean
digit=numbers.slice(2,3)// created sub array from main array and stored in another array
console.log(digit)

let index=numbers.indexOf(18)
console.log(index)

let sum=0
for(let m=0;m<numbers.length;m++){
    sum=sum+numbers[m]
}

console.log(sum)



