function sendEmail() {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "tobias@tuleby.com",
      Password : "Your smtp password",
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