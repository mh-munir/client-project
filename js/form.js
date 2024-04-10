// Submit Form
function sendEmail() {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "tobias@tuleby.com",
      Password : "7CE87B93F9D8BD754B1E35D6CBF720D43DD3",
      To : 'tobias@tuleby.com',
      From : "tobias@tuleby.com",
      Subject : "This is the subject",
      Body: 
      "Company: " +
      document.getElementById("company").value +
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value
  }).then(
    message => alert(message)
  );
}



function updateCSSClass(a, b) {
}

function checkfnlname(field) {
  curr = document.getElementById(field).value;
  if (curr.length > 0) {
    updateCSSClass(field, 1);
    return true;
  } else {
    updateCSSClass(field, 0);
    return false;
  }
}
window.onload = function () {
  var btnSubmit = document.getElementById('submit');
  // disable submit
  btnSubmit.setAttribute('disabled', 'disabled');

  // attach the keyup event to each input
  [].slice.call(document.querySelectorAll('form input:not([type="submit"])')).forEach(function (element, index) {
    element.addEventListener('keyup', function (e) {
      // compute the number of invalid fields
      var invalidFields = [].slice.call(document.querySelectorAll('form input:not([type="submit"])')).filter(function (element, index) {
        return !checkfnlname(element.id);
      });
      if (invalidFields.length == 0) {
        // reenable the submit if n. of invalid inputs is 0
        btnSubmit.removeAttribute('disabled');
      } else {
        // disable submit because there are invalid inputs
        btnSubmit.setAttribute('disabled', 'disabled');
      }
    }, false);
  });
}