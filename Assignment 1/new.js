var check = function() 
{
    if (document.getElementById('password').value == document.getElementById('confirm_password').value) 
    {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Not matching';
    }
  }

  function CheckFunction() {
    var x, text;
    x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

  function validateForm() {
    var valb = true;
    var fname = document.forms["myForm"]["first_name"].value;
    var lname = document.forms["myForm"]["last_name"].value;
    var pno = document.forms["myForm"]["phone_number"].value;
    var email_id = document.forms["myForm"]["email"].value;
    var address1=document.forms["myForm"]["addr1"].value;
    //var pno_regex = /^\d{10}$/;
    if (pno.length != 10) {
      phone.querySelector(".phonerror").innerHTML =
        "Phone Number should have 10 digits";
      valb = false;
    }
    if (email_id.length == 0) {
      femail_id.querySelector(".emailerror").innerHTML =
        "Email id cannot be empty";
    }
    if (fname.length == 0) {
      ffname.querySelector(".formerror").innerHTML = "First Name cannot be empty";
    }
    if (lname.length == 0) {
      console.log("Last Name cannot be empty");
      flname.querySelector(".lname_error").innerHTML =
        "Last name cannot be empty";
      valb = false;
    }
    if (fname.length > 20) {
      seterror("name", "Length is more than 5");
      console.log("First Name cannot be greater than 20 characters");
      console.log(fname.length);
      valb = false;
    }
    if (fname.length == 0) {
      console.log("First Name cannot be blank");
      valb = false;
    }
    if(address1.length<5)
    {
      console.log("Please enter a valid address");
      faddress1.querySelector(".faddress1_error").innerHTML="Please enter a valid address"; 
      valb=false;
    } 
  return valb;
  }
  