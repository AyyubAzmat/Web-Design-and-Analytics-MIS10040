function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateForm() {
  var x = document.forms["myForm"]["fmail"].value;
  if (x == "") {
    alert("Email address must be filled out");
    return false;
  }
}