function doubleNum(num){
  var temp = num.toString();
  var i = 0, k = Math.floor(temp.length/2), 
  isTwins = true;
  while(k < temp.length){
    if(temp[k]!=temp[i]){
      isTwins = false;
      break;
    }
    i++; k++;
  }
  if(temp.length==1||(!isTwins)){
    return num*2;
  }
  else if(isTwins){
    return num;
  }
}
console.log(doubleNum(1));