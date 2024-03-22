document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  
  var responseElement = document.getElementById('response');
  responseElement.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
