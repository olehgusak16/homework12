let userName = prompt('Hello! What is your name?');
let userCity = prompt(`Nice to meet you, ${userName}! Where are you from?`);
let userAge = prompt(`Very nice, ${userName}! I have one last question about you! What is your age?`);

let userInfo = 'Hello, ' + userName + '. You are ' + userAge + ' years old. You are from ' + userCity;
document.write(userInfo);