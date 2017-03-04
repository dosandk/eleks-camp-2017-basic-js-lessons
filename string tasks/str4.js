function turnMeBaby(str){
  var temp = "";
  for(var i=str.length-1; i>=0; i--){
    temp+=str[i];
  }
  return temp;
}
console.log(turnMeBaby("asdfasd"));
