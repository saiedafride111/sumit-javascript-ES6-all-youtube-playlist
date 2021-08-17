// function number(){
//     return 10;
// }
// console.log(number())

// let number = () => {
//     return 10;
// };
// console.log(number())

// let number = () => 10;
// console.log(number())

let number = (a, b) => a + b;
console.log(number(8, 2))




// var javascript = {
//     name : 'javascript',
//     libries: ['react', 'angular', 'vue'],
//     printLibries: function(){
//         let shelf = this;
//         this.libries.forEach(function(a){
//             // console.log(`${this.name} loves ${a}`);
//             console.log(`${shelf.name} loves ${a}`);
//         });
//     },
// };
// javascript.printLibries();


// var javascript = {
//     name : 'javascript',
//     libries: ['react', 'angular', 'vue'],
//     printLibries: function(){
//         this.libries.forEach((a) => console.log(`${this.name} loves ${a}`));
//     },
// };
// javascript.printLibries();



// function Person(name) {
//     this.name = name;
// }
// var sakib = new Person("sakib")
// console.log(sakib)