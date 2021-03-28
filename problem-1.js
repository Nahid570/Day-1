const checkResult = prompt("Wanna check your Result ? Let's find out-- \n Yes or No ?");

const physics = prompt("Mark you get in Physics ? ");
const chemistry = prompt("Mark you get in Chemistry ? ");
const biology = prompt("Mark you get in Biology ? ");
const mathmatics = prompt("Mark you get in Mathmatics ? ");
const computer = prompt("Mark you get in Computer ? ");


const percentage = (physics + chemistry + biology + mathmatics + computer) / 5 * 100;

if (percentage>=90) {
    console.log("Your grade is A");
}
else if (percentage>=80){
    console.log("Your grade is B");
}
else if (percentage>=70){
    console.log("Your grade is C");
}
else if (percentage>=60){
    console.log("Your grade is D");
}
else if (percentage>=40){
    console.log("Your grade is E");
}
else{
    console.log("Sorry you failed ! Better luck next time");
}
