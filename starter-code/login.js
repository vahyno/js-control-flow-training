console.log("login.js loaded");



let userLogin = {
  name:'octocat_rules',
  password:'123',
}

let usernameQ = window.prompt(`Enter password for user ${userLogin['name']}`);
while (usernameQ !== userLogin['password']){
  alert('Answer does not match what we have on file. Try again');
  usernameQ = window.prompt(`Enter password for user ${userLogin['name']}`);
}
