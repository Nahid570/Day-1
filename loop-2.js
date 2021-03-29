
const show = prompt('Enter number to print Even & Odd');

for(let i=1 ; i<=show ; i++) {

    if (i%2 === 0) {
        console.log("Even : "+i);
    }

    else if (i%2 !== 0) {
        console.log("Odd : "+i);
    }

    else{
        console.log("please enter a valid number");
    }

}