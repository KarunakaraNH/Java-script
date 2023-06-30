console.log("hello")

//Before ES 6 var is used to declare the variable after that 2 new keywords are introduced i.e let and const

let a=1
let b=2.66171
console.log(typeof(a))
console.log(typeof(b))

//Var - we can redeclare and reassign the values
//let- we can only reassign- redclaring is not working
//const- reassigning will fail

//loop in js
let i=1;
while(i<10){
    console.log("we are in!!!!")
    i++;
}

//do while loop

do{
    console.log("doing something")
}
while(i<5){
    console.log("condition satisfied >>>>>>..")
}

//Print even number using for loop

for(let k=1;k<=10;k++){
if(k%2==0){
    console.log("Even number "+k)
}
}

//Print the numbers which are deviding by 10 and 2

// and operator && or operator ||
for(let j=1;j<=100;j++){
    if(j%2==0 && j%5==0){
        console.log("number which are deviding by 10 and 2 is" +j)
    }
}

