for (let i = 0; i <= 5; i++) {
    console.log(i, "hi"); 
}

// for in
const myObj = {
    name : 'javascript',
    estd : '1995',
    founder : 'Brean Eich'
}

for(property in myObj) {
    console.log(property)
}


// for off
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(element of myArray) {
    console.log(element)
}

const myString = 'I love Javascript'
for(element of myString) {
    console.log(element)
}