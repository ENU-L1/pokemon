/*
 * Student Name: Shelby Surprenant-Nicolson
 * Student ID: 041095620
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: Winter 2023
 * Assignment: 4
 * Date Submitted: Apr. 17, 2023
 */

function validateForm() {

  var n = document.forms["myForm"]["name"].value;
    if (n==null || n=="") 
	  {
        alert("Name must be filled out");
	    return false;
	  } 
	
  var p = document.forms["myForm"]["phone"].value;
	if (p==null || p.length < 10) 
	  {
		alert("Phone number is too short");
		return false;
  	  }

  var validRegex = /^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._-])?([a-zA-Z0-9]{4,}))*@(([a-zA-Z\-])+(\.))+([a-zA-Z]{2,4})+$/;
    if ((validRegex)==email1.value) 
	  {
        alert("valid email address");
        return true;
      }
  
  const em = document.getElementById("email1");
  const confirmEm = document.getElementById("email2");
  const error = document.getElementById("emailError");

    if (em.value !== confirmEm.value) 
      {
        error.textContent = "Emails must match";
        error.className = "error active";
      }
 
  var userinput = document.getElementById("dateofbirth").value;  
  var dateofbirth = new Date(userinput);  

    if(userinput==null || userinput=='') 
	  {  
        alert("please input your date of birth")
	    return false;   
      }
	  
  var today = new Date();  
		
	if (dateofbirth > today) 
	  {
	    alert("Invalid Date")
	    return false
	  }

// Was unable to make the code bellow work. and it made the code unusable. 
	  
/*var currentYear = now.getYear();  
  yearAge = currentYear - dateofbirthYear;  
	if (dateofbirth < 18 )
	  {
	    alert("Your age is not over 18 years old")
	  	return false
	  }
*/
	
  var c = document.forms["myForm"]["comment"].value;
	if (c==null || c.length < 3)
	  {
  	    alert("Write a Comment.")
	    return false
	  }
	
  const checkbox = document.getElementById("checkbox");
    if (checkbox.checked == false) 
	  {
        alert("not checked");
	    return false
      } 
	
    else
	  { 
	     alert("Form submission successful!🎉");    
         validateForm.reset();
      }
}