function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "<sender’s email address>",
        Password: "<email password>",
        To: 'enghassanhamdi@gmail.com',
        From: "hassanhh1996eng@gmail.com",
        Subject: "<email subject>",
        Body: "<email body>",
    }).then(
        message => alert("mail sent successfully")
    );
}