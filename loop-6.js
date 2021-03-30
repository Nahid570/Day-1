const hexaValue = prompt('Enter hexadecimal value : ');

var i = 0;

while(hexaValue[i]) {

    switch(hexaValue[i]){
        case '0':
            console.log('0000');
            break;
        case '1':
            console.log('0001');
            break;
        case '2':
            console.log('0010');
            break;
        case '3':
            console.log('0011');
            break;
        case '4':
            console.log('0100');
            break;
        case '5':
            console.log('0101');
            break;
        case '6':
            console.log('0110');
            break;
        case '7':
            console.log('0111');
            break;
        case '8':
            console.log('1000');
            break;
        case '9':
            console.log('1001');
            break;
        case 'a':
        case 'A':
            console.log('1010');
            break;
        case 'b':
        case 'B':
            console.log('1011');
            break;
        case 'c':
        case 'C':
            console.log('1100');
            break;
        case 'd':
        case 'D':
            console.log('1101');
            break;
        case 'e':
        case 'E':
            console.log('1110');
            break;
        case 'f':
        case 'F':
            console.log('1111');
            break;
        default:
            console.log("please enter a valid hex value");
    }
    
        i++


}

