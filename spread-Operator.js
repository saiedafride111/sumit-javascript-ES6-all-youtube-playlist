var numbers = [1, 2, 3];
// var newNumbers = [numbers[0], numbers[1], numbers[2], numbers[3], 4, 5, 5, 6, 6, 7, 7,]
var newNumbers = [...numbers, 4, 5, 5, 6, 6, 7, 7,]
console.log(newNumbers)


var numbers1 = [1, 2];
var numbers2 = [3, 4, 5]
var number = [...numbers1, ...numbers2]
console.log(number)

var numbers = [1, 2, 3]
var a = numbers;
numbers.push(4)
console.log(a)


var numbers = [1, 2, 3]
var a = [numbers];
numbers.push(5)
console.log(a)

var myObj1 = {
    x : 1,
    y : 2
}

var myObj2 = {
    a : 3,
    b : 4
}
console.log({
    ...myObj1,
    ...myObj2
})
