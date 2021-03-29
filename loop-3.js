const show = prompt("Enter a valid number: ");

var even = 0 , odd = 0 ;

for (var i = 0; i <=show ; i++) {

        if (i % 2 == 0) {
            var even = even + i;   
        }
        else{
            var odd = odd + i;   
        }
       
        

}
console.log("Total of even numbers : "+even);
console.log("Total of odd numbers : "+odd);


