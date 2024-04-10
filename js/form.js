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