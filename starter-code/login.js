console.log("login.js loaded");



let userLogin = {
  name:'baba_booey',
  password:'h100',
}

let usernameQ = window.prompt(`Enter password for user ${userLogin['name']}`);
while (usernameQ !== userLogin['password']){
  alert('Answer does not match what we have on file. Try again');
  usernameQ = window.prompt(`Enter password for user ${userLogin['name']}`);
}
