function wordCount(str){
  var count = 0, i = 0, k = str.length;
  if(str[i]==" "){
    while(str[i]==" "){
      i++;
    }
  }
  if(str[k-1]==" "){
    while(str[k-1]==" "){
      k--;
    }
  }
  for(;i<k;i++){
    if(str[i]==" "){
      count++;
      while(str[i]==" "){
        i++;
      }
    }
  }
  return count+1;
}
console.log(wordCount(" 12 12 tyt  12 2         "));
