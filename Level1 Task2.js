document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name ) {
        alert("enter valid name");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in the fields.");
    }
    if (email .trim()==='') {
        alert("enter valid email id");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
    if ( message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
