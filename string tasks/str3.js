function truncate(str, maxlength){
  var temp = "";
  if(str.length>maxlength){
    for(var i = 0; i < maxlength-3;i++){
      temp +=str[i];
      console.log(str[i]);
    }
    for(;i<maxlength;i++){
      temp+=".";
    }
    return temp;
}
else{
  temp = str;
  return temp;
}
}
console.log(truncate("asdqweqwe",6));
