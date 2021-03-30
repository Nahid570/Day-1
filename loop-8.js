
var checkFactors = prompt('Please enter a number--');

var factors = 1 ;

for (let i = 1 ; i<=checkFactors ; i++) {

        if (checkFactors % i === 0) {
            console.log(i);    
        }
}