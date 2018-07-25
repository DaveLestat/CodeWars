function abbrevName(name){

  var name = name;
  var letters = name.match(/\b(\w)/g);
  var initial = letters.join('.');
  return initial.toUpperCase();
}