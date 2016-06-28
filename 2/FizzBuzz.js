for(var i = 0; i < 100; i++) {
    var str = '';
    if((i+1) % 3 == 0) {
        str += 'Fizz';
    }
    if((i+1) % 5 == 0) {
       str += 'Buzz';
    } else if((i+1) % 3 != 0) {
        str += (i+1);
    }
    console.log(str);
}