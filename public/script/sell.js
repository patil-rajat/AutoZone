
function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const carManufacturer = document.getElementById("carManufacturer").value.trim();
    const carModel = document.getElementById("carModel").value.trim();
    const purchaseYear = document.getElementById("purchaseYear").value.trim();
    
    const firstNameRegex = /^[a-zA-Z]/;
    const lastNameRegex = /^[a-zA-Z]/;
    const carManufacturerRegex = /^[a-zA-Z]/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    let isValid = true;

    if (firstName === "" || !firstName.match(firstNameRegex)) {
        isValid = false ;
        alert("Please enter your First Name.");
    }

    if (lastName === "" || !lastName.match(lastNameRegex)) {
        isValid = false ;
        alert("Please enter your Last Name.");
    }

    if (!email.match(emailRegex)) {
        isValid = false ;
        alert("Please enter a valid Email Address.");
    }

    if (!phone.match(phoneRegex)) {
        isValid = false;
        alert("Please enter a valid Phone Number (10 digits).");
    }

    if (carManufacturer === "" || !carManufacturer.match(carManufacturerRegex)) {
        isValid = false ;
        alert("Please enter the Car Manufacturer.");
    }

    if (carModel === "") {
        isValid = false ;
        alert("Please enter the Car Model.");
    }

    if (purchaseYear === "") {
        isValid = false;
        alert("Please enter the Purchase Year.");
    }

    if (isValid) {
        const anchorElement = document.getElementById("submitButtonLink");
        var obj = {
            fN: firstName,
            lN: lastName,
            mail:email,
            mobile:phone,
            Manufacturer:carManufacturer,
            model:carModel,
            year:purchaseYear 
        };
        fetch("/sell",{
            method:"Post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(obj)
        });
        alert("Thank You for submitting will get back to u on Email ! Stay Tuned !");
        anchorElement.href = "#"; 
        anchorElement.click();
    }
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    validateForm(); 
});