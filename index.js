
var readlineSync = require('readline-sync');
var chalk = require("chalk");


var userName = readlineSync.question(chalk.green.bold('May I have your name? '));

console.log("\n \nHi " + chalk.white.bgBlue.bold(userName) + " enter your birth date and \nI will tell you if you were born on leap year. \n ");

var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

getDate();

function getDate()
{

  var userBirthDate = readlineSync.question('Enter your birth date in this format : DD/MM/YYYY - \n');

  var birthDate = userBirthDate.split('/');
  var DD = birthDate[0];
  var MM = birthDate[1];
  var YYYY = birthDate[2];
  if (DD < 31 && MM < 12 && DD > 0 && MM > 0 && (!isNaN(DD)) && (!isNaN(MM)) && (!isNaN(YYYY)))
  {
      if (DD < numberOfDays[MM - 1])
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
        console.log(" ERROR !! INVALID DATE.\n\n ");
        getDate();
      }

  }
  else
  {
      console.log(" ERROR !! INVALID DATE.\n\n ");
      getDate();
  }
  
}

function isLeapYear(year) {
 year = Number(year);
 return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
