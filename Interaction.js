//1, Alert 
//alert("Hello");
//MINI winodw will open that called as MODEL window
// Limitations of model window
//1. location is based on browser and look and feel also depends on browser

//2. Prompt function accept 2 arg
//syntax result =prompt(title,[default]);
//text to show to visitor
// default optional, initial value to input field
//[] square brackets  around it is denotes that its optional

let age=prompt('HOW old are you??',100);
alert('you are ${age} year old');

//3. confirm - it will shows a model winodw with question and two buttons OK and CANCEL
//syntax result=confirm(question);
let isBoss=confirm('Are you the boss');
alert(isBoss);

let conf=confirm("you must be 18 year old to see the conent");
let Name=prompt('What is your name?');
let Age=prompt('what is your age');
if(Age>18){
    alert('welcome ${Name}');
}
else{
    alert('you are not authorize');
}


