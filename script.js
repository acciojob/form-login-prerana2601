// Function to handle form submission and get values of First and Last name
function getFormvalue(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the values of the first name and last name from the form fields
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    // Combine first and last name and show them in an alert
    alert(firstName + " " + lastName);
}
