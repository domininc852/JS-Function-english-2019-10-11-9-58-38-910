function countWords(message){
  var count=1;
  for (var i=0;i<message.length;i++){
    if (message[i]==" "){
      count+=1;
    }
  }
  return count;
}
