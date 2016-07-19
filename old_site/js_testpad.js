// allows the use of the prompt functionality
var prompt = require('prompt');
//start the prompt
prompt.start();

var name = "Steve";

console.log(name + " is my original name. What is my new name?");

// this will prompt the user for a name, and send the result into the nested function
prompt.get(['username'], function (err, result) {
  console.log(name + " \'s name just got changed to ");
  name = result.username;
  console.log(name);
  console.log(name + " is my new name");
});

