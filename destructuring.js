// const user = {
//     id : 12,
//     name: 'John',
//     className: 'Ten'
// }

// // const {name} = user;
// // console.log(name);
// const {name: title} = user;
// console.log(title)



// const user2 = {
//     id : 12,
//     name: 'John',
//     className: 'Ten',
//     education: {
//         degree: 'BSC'
//     }
// }

// const {education : {degree}} = user2;
// console.log(degree)
// const {education : {degree : x}} = user2;
// console.log(x)


// const user3 = {
//     id : 12,
//     name: 'John',
//     className: 'Ten',
//     // education: {
//     //     degree: 'BSC'
//     // }
// }

// const {education: {degree} = {} } = user3;
// console.log(degree);



// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [,a,,,b] = numbers;
// console.log(a, b)

// var numbers2 = [1, 2, 3, [100, 200, 300, 400], 7, 8, 9]
// const [,,,[,a,b]] = numbers2;
// console.log(a, b)

// var a = 1;
// var b = 2;

// var temp = a;
// a = b;
// b = temp;

// console.log(a, b)


var a = 1;
var b = 2;

[b, a] = [a, b]

console.log(a, b)