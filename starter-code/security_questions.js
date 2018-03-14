console.log("security_questions.js loaded");

let securityQuestions = [{
  question: "What was your first pet's name?",
  expectedAnswer: "Fluff"
},{
  question: "What is your favorite city?",
  expectedAnswer: "Berkeley"
},{
  question: "Your favorite food?",
  expectedAnswer: "pizza"
}];



for (let i=0; i<securityQuestions.length;i++){
  let securityQ = window.prompt(securityQuestions[i].question);
  if (securityQ !== securityQuestions[i].expectedAnswer){
    alert('Answer does not match what we have on file.')
    break;
  };
}
