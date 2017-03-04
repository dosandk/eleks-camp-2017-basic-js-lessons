function pow(num, pow){
  var temp = num;
  for(var i = 1; i < pow; i++){
    num*=temp;
  }
  return num;
}
console.log(pow(2,4))