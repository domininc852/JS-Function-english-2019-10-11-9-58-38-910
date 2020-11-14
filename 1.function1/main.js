function reverseString(message){
  var reverse="";
  for (var i=message.length-1;i>=0;i--){
    reverse+=message[i];
  }
  return reverse;
}
