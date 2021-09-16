
var readlineSync = require('readline-sync');
var chalk = require("chalk");

var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var regEx = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;


var userName = readlineSync.question(chalk.green.bold('May I have your name? \n'));

checkUserName(userName);


function checkUserName(userName){
  if(userName === ""){
  console.log("Please enter your name. \n");
  userName = readlineSync.question(chalk.green.bold('May I have your name? \n'))
  checkUserName(userName);
}
else{
console.log("\n \nHi " + chalk.white.bgBlue.bold(userName) + " enter your birth date and \nI will tell you if you were born on leap year. \n ");
getDate();
}

}

function getDate()
{

  var userBirthDate = readlineSync.question('Enter your birth date in this format : DD/MM/YYYY - \n');
  if(userBirthDate === ""){
    console.log("Please enter your birthdate");
    getDate();
  }

  if(validateDate(userBirthDate)){
  var birthDate = userBirthDate.split('/');
  var DD = Number(birthDate[0]);
  var MM = Number(birthDate[1]);
  var YYYY = Number(birthDate[2]);
      if (DD <= numberOfDays[MM - 1])
      {
        if(isLeapYear(YYYY)){
          console.log(chalk.red("\n Hurray!! You were born on a leap year. \n You can share this on your social media."));
        }
        else{
            console.log("\n Ohh no !! You were not born on a leap year");
        }
      }
      else
      {
        console.log(" ERROR !! INVALID DATE FORMAT.\n\n ");
        getDate();
      }

  }
  else
  {
      console.log(" ERROR !! INVALID DATE FORMAT.\n\n ");
      getDate();
  }
  
}

function isLeapYear(year) {
 year = Number(year);
 return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function validateDate(date){
  var flag = regEx.test(date);
  return flag;
}