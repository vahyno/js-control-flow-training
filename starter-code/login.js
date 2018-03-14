console.log("login.js loaded");



let userLogin = {
  name:'baba_booey',
  password:'h100',
}

let usernameQ = window.prompt(`Enter password for user ${userLogin['name']}`);
let attempt = 3;

while (usernameQ !== userLogin['password'] && attempt > 1){
  alert('Answer does not match what we have on file. Try again');
  usernameQ = window.prompt(`Enter password for user ${userLogin['name']}`);
  attempt -=1;
}
