// function myFunc(){
//     console.log(arguments);
// }
// myFunc(1, 2, 3, 4, 5, 6)


// function myFunc(...params){
//     console.log(params);
// }
// myFunc(1, 2, 3, 4, 5, 6, 7, 8)

function myFunc(a, ...params){
    console.log(a);
    console.log(params);
}
myFunc(1, 2, 3, 4, 5, 6, 7, 8)