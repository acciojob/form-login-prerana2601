// Function to handle form submission and get values of First and Last name
function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    alert(`${firstName} ${lastName}`);
}