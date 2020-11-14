function alphabetSort(message){
  var new_message= message.split("");
  new_message=new_message.sort();
  new_message=new_message.join("");
  return new_message;
}
