/*
 * Student Name: Shelby Surprenant-Nicolson
 * Student ID: 041095620
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: Winter 2023
 * Assignment: 4
 * Date Submitted: Apr. 17, 2023
 */

/*
	Citation: https://www.w3resource.com/javascript/form/email-validation.php
	Date Retrieved: March 21st, 2023
	Notes: copied and adapted 5 JavaScript lines for email validation.
*/


let regex = /^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._-])?([a-zA-Z0-9]{4,}))*@(([a-zA-Z\-])+(\.))+([a-zA-Z]{2,4})+$/;

let isValidEmail = ["myEmail1@email.com", "my.Email1@e-mail.com", "myEmail1@email.c", "m@email1.com", "1", "true", "myEmail1@com", "my_Email1@e.com", "1m@email.com", "my!Email@email.com" ];

isValidEmail.forEach((address) => {
    console.log(regex.test(address))
});

/*
Results:
	true 
	true
	false
	false 
	false
	false
	false
	true 
	false 
	false
*/

/*

function birthyear(x) {
  if (x >= 1920 && x <= 2010)
{
	return true;
}
  else{
	return false;
  }
}

function birthmonth(x) {
  if (x >= 1 && x <= 12)
{
	return true;
}
  else{
	return false;
  }
}

function birthday(x) {
  if (x >= 1 && x <= 31)
{
	return true;
}
  else{
	return false;
  }
}

*/

/*
1. What are the possible return values from the Date constructor? 
	the possible return values from the Date constructor are based on what parameter
	  you allow it to have. If it has only the year, month and day, it will return those values,
	  it will also depend if you have any restrictions on the values, like a mininum date or maximum date.

2. Why concatenate them into a string, instead of simply passing each number to the constructor as an individual date part?
    putting it through a string allows it to be easier to program and it allows only one string that has the whole date part in one run.

*/


/*
	Citation: https://codereview.stackexchange.com/questions/118272/is-date-18-years-old
	Date Retrieved: March 22st, 2023
	Notes: copied and adapted 2 JavaScript lines for age validation.
*/


function isAgeOfMajority(birthyear, birthmonth, birthday) {
    return new Date(birthyear+18, birthmonth-1, birthday) <= new Date();
}

/*
Results:
	true
	true --> wasn't able to make it figure out a leap year.
	false
	true
	true
	false
*/


function myFunction() {
  var x = document.getElementById("myNav_bar");
  if (x.className === "nav_bar") {
    x.className += " responsive";
  } else {
    x.className = "nav_bar";
  }
}