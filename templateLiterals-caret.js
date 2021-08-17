// var a = 5;
// var b = 7;

// // console.log("I am " + a + " and " + b);
// console.log(`I am ${a} and ${b}`);


// var player1 = 'sakib';
// var player2 = 'tamim';
// console.log(`We have ${player1} and ${player2} in our cricket team`);


// function modifier(strings, ...values){
//     console.log(strings);
//     console.log(values);
// }

// var player1 = 'sakib';
// var player2 = 'tamim';
// console.log(modifier`We have ${player1} and ${player2} in our cricket team`);



function modifier(strings, ...values){
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? 'Mr. ' + values.shift() : '');
    }, '');
    return m;
}

var player1 = 'sakib';
var player2 = 'tamim';
console.log(modifier`We have ${player1} and ${player2} in our cricket team`);