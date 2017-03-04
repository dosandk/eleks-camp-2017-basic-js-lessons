function ucFirst(str){
  var temp = "";
  temp += str[0].toUpperCase();
  
  for(var i = 1; i < str.length; i++)
    {
      temp+=str[i];
    }
  return temp;
}
console.log(ucFirst("asd"));