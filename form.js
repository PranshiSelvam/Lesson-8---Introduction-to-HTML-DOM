function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    var message = document.getElementById('message'); 

    let messagetext = '';

    if (email === '') {
        messagetext = 'Enter an email';
        message.style.color = 'red;'
    } else if (password === '') {
        messagetext = 'Enter a password';
        message.style.color = 'red'; 
    } else if (name === '') {
        messagetext = 'Enter a name';
        message.style.color = 'red';
    } else if (age === '') {
        messagetext = 'Enter an age';
        message.style.color = 'red';
    } else {
        messagetext = 'Login complete';
        message.style.color = 'green';
    } 
    message.innerText = messagetext; 
}