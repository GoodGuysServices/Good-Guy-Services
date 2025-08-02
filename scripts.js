
// EmailJS user ID
emailjs.init("hL_PzWdIzCqIYGh8A"); 

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the template for EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email with EmailJS
    emailjs.send('service_g24gglo', 'template_cjrnlzb', templateParams)
        .then(function(response) {
            // Show success message
            document.getElementById('message-result').innerHTML = '<p>Message sent successfully! We\'ll get back to you soon.</p>';
            document.getElementById('message-result').style.display = 'block';
            document.getElementById('contact-form').reset();  // Reset the form
        }, function(error) {
            // Show error message
            document.getElementById('message-result').innerHTML = '<p>Sorry, there was an error sending your message. Please try again later.</p>';
            document.getElementById('message-result').style.display = 'block';
        });
});
