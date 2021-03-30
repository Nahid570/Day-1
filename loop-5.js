var checkNumber = prompt("Please enter a positive number : ");
var count = 0;

for(let i = 1; i <= checkNumber ; i++ ){


    if (checkNumber % i == 0) {
        count++;
    }

}
if (count===2) {
    console.log(checkNumber+" is a prime number");
}
else {
    console.log(checkNumber+ " is not a prime number");
}