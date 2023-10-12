let userNumb = +prompt('Please enter five digital number below');
while (userNumb < 10000 || userNumb > 99999) {
    userNumb = +prompt(`Please enter five digital number below!!! This is not ${userNumb} five digital number`);
}

let userResult = userNumb.toString().split('');
document.write(userResult.join(' '));
