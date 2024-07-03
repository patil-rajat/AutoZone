function redirectToLink() {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    //const firstNameError = document.getElementById("firstNameError");
    //const lastNameError = document.getElementById("lastNameError");
    //const emailError = document.getElementById("emailError");
    //const phoneError = document.getElementById("phoneError");

    let isValid = true; 

    if (firstName === "") {
        isValid = false;
        alert("First Name is required.");
    }

    if (lastName === "") {
        isValid = false;
       alert("Last Name is required.");
    }

     if (!email.match(emailRegex)) {
        isValid = false;
       alert("Invalid email format.");
    }
    if (!phone.match(phoneRegex)) {
        isValid = false;
        alert("Invalid phone number.");
    }
    
    if (isValid) {
        alert("Do u wish to submit ?");
        const anchorElement = document.getElementById("submitButtonLink");
       
        anchorElement.href = "/buy.html"; 
        anchorElement.click();
    }
}