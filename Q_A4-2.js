document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = new Date(document.getElementById("dob").value);
    let age = parseInt(document.getElementById("age").value);
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Calculate age from DOB
    let today = new Date();
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        calculatedAge--;
    }

    // Validate age
    if (calculatedAge < 15 || calculatedAge > 30) {
        alert("Age must be between 15 and 30 years.");
        return;
    }

    // Validate password
    let passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Show name in alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Show name below the form
    document.getElementById("output").innerHTML = `Submitted Name: ${firstName} ${lastName}`;
});