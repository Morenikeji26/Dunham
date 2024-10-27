document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("accountNumber").value;

    // Placeholder for backend form handling (encryption needed for sensitive info)
    document.getElementById("confirmationMessage").textContent = Thank you, ${ name } !Your registration has been received.;

    // Optionally, reset the form
    document.getElementById("registrationForm").reset();
})