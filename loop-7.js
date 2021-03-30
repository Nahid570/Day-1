
const fiboNumber = prompt('Please enter a positive number');

var first = 0 , second = 1 , count = 0 ,fibo ;

while(count < fiboNumber){

    if (count<=1) {
        fibo = count ;
    }
    else{
        fibo = first + second;
        first = second;
        second = fibo;
    }

    console.log(fibo);
    count++;


}