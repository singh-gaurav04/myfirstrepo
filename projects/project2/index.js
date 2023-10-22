//Printing with javascript
console.log("We are here to learn from danishhhhh")

// var , let , const and the difference between them
let a="my calss"
var c=5
const b=6


//Primitive Types (defined data types)
// 1.String -> ("Danish")
// 2.Number -> (1,2,3)
// 3.Boolean -> true or false
// 4.Undefined -> let b; (it is not defined)
// 5.NULL -> empty variable 


//Javascript is a dynamically typed language (data type can be changed after declaration)
var z=6
z="Danish"
console.log(z)

//Refrence Types(Data types)
// 1.Objects (multiple variables linked together)
// 2.Arrays (List of similar items)
// 3.Functions

let person={
    firstName : "Danish", //properties
    lastName : "Khan",
    age : 20,
    city : "Bhopallllllllll"
};

console.log(person["city"])

//To access object there are two ways
// 1.dot Notation (person.age)
// 2.Bracket Notation (person[age])

console.log(person.lastName)
console.log(person.age)

//Arrays - used to contain a list of similar items
let arr = ["aryan" , "sourabh" , "tarun"];
console.log(arr)
console.log(arr[0])

//Operator 
//  1.Comparison operator (< ,>,<=,>=)
        // '==='(strict equality) vs '==' vs '!=='

    //2. Ternary operator

    //Logical (&& -> both the condition should be true ? true : false)
    //        ( || -> koi ek bhi true hai ? true : false)

var age =18

var check = (age === 18) ? 'you can vote' : 'cant vote'; //
console.log(check);

let num=1
let str='1'

if(num === str){
    console.log("print ho rha h")
}
else{
    console.log("Not printing")
}

console.log(num+str) //concatination


//Loops - 
// 1- For loop
// 2- while loop
// 3- do-while loop
// 4- what is an infinite loop?
// 5- For-in loop
// 6- For-of loop

// for(let i=0;i<3;i++){
//     console.log(arr[i]);
// }

let i=0
while(i<5){
    console.log("heloooooo jiiiii");
    i++;
}

//Iterating trhough objects

let rectangle = {
    length:12,
    breadth:14,
    height:10
};

// for(let i in rectangle){
//     console.log(i,rectangle[i])
// }

// for(let i of Object.keys(rectangle)){
//     console.log(i,rectangle[i])
// }

//Object cloning
    // 1.itretion
    // 2.assign operator
    // 3.spread

// let obj2 = Object.assign({},rectangle);
// for(let i in rectangle){
//     obj2[i] = rectangle[i];
// }

let obj3 = {...rectangle};

// for(let i in obj2){
//     console.log(i,obj2[i])
// }

for(let i in obj3){
    console.log(i,obj3[i])
}


//Functions
function add(a,b){
    return a+b;
}
console.log(`The sum is ${add(5,2)}`);

//For object creation there are two types of function
// 1.Factory function
// 2.Construction function
function createRectangle(){
    return rectangle;
}

let naruto = createRectangle();

console.log(naruto)


function square(){
    return (this.length = 90,
    this.breadth = 90)
}

draw=function(){
    return square;
}

let pr = draw();
console.log(pr)

let fill = {
    color:"blue"
};

for(i in fill){
    console.log(`${fill[i]}`)
}

fill.color="yelllooww"

delete fill.color;

for(i in fill){
    console.log(`${fill[i]}`)
}


