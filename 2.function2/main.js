function palindrome(message){
  var isPalindrome=true;
  for(var i=0;i<message.length;i++){
    if (i <message.length-1-i){
      if (message[i]!=message[message.length-1-i]){
          isPalindrome=false;
          return isPalindrome;
      }
    }
  }
  return isPalindrome;
}
