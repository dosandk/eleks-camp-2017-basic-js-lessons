function strRepeat( str, count){
    var temp = "";
    for( i = 0; i<count; i++)
    {
        temp+=str+" ";
    }
    return temp;
}

console.log(strRepeat("First program is done!", 5));