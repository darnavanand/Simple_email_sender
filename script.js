const form = document.querySelector('#con_form');
function sendmsg(e){
    e.preventDefault();
    
    const name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    msg = document.querySelector('#area');

    Email.send({
    SecureToken : "e4f36c64-d8de-4773-8aa7-8c69f74d79f2",
    To : 'arnavanand2930@gmail.com',
    From : email.value,
    Subject : "Contact Form",
    Body : msg.value
    }).then(
    message => alert(message)
    );
}

form.addEventListener('submit',sendmsg);
