// Header
const headers = document.querySelector('.container-header');
const header = document.createElement('nav');
header.classList = "navbar navbar-expand-lg navbar-light bg-light"
header.innerHTML = `
    <div class="container-fluid">
        <a href="index.html"><img class="logo" src="img/logo.png" alt="logo"></a>
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about_us.html">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="shipping.html">Env&iacute;os</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="products.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contacts.html">Contacto</a>
                </li>
            </ul>
            <div class="btn-shopping-cart">
            </div>
        </div>
    </div>
`
headers.appendChild(header);

// Contacts form
const contactsForm = document.querySelector('#contacts');
const contacts = document.createElement('div');
contacts.classList = "container-contacts"
contacts.innerHTML = `
    <div class="img-contacts">
        <img src="img/contacts.png" alt="contacts">
        <h2>Cont&aacute;ctanos</h2>
    </div>
    <div class="container-form">
        <form class="contacts-form" action="/" method="POST" autocomplete="on" id="contacts-form">
            <div class="form-group">
                <img class="icon-form" src="img/user.svg" alt="user" >
                <input type="text" name="user" id="user" placeholder="Nombre y Apellido">                        
            </div>
            <div class="form-group">
                <img class="icon-form" src="img/envelope.svg" alt="envelope">
                <input type="email" name="user-email" id="user-email" placeholder="Email">
            </div>
            <div class="form-group">
                <img class="icon-form" src="img/call.svg" alt="call">
                <input type="tel" name="phone" id="phone" placeholder="Tel&eacute;fono">
            </div>
            <div class="form-group">
                <img class="icon-form" src="img/comment.svg" alt="comment">
                <textarea name="form-text" id="form-text" cols="30" rows="5" placeholder="Estamos para ayudarte, dejanos tu consulta."></textarea>
            </div>
            <div class="msg"></div>
            <button type="submit">Enviar</button>
        </form>
    </div>
`
contactsForm.appendChild(contacts);


// Validations in the form
const user = document.getElementById('user')
const email = document.getElementById('user-email')
const phone = document.getElementById('phone')

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('contacts-form').addEventListener('submit', validation)
});

function validation(e) {
    e.preventDefault();
    let msg = document.getElementsByClassName('msg')[0];
    msg.innerText = '';
    if(user.value == '' && email.value == '' && phone.value == ''){
        for(let i = 0; i < element.length; i++){
            element[i].style.border = '2px solid red';
        }
        msg.innerText = 'Debes completar los campos obligatorios';
    }else if(user.value == ''){
        user.style.border = '2px solid red';
        msg.innerText = 'Debes escribir un nombre';
    }else if(email.value == ''){
        email.style.border = '2px solid red';
        msg.innerText = 'Debes escribir un email';
    }else if(phone.value == ''){
        phone.style.border = '2px solid red';
        msg.innerText = 'Debes ingresar un número de teléfono'
    }else{
        msg.innerText = 'El formulario se envió correctamente';
        msg.style.color = 'green'
        clean();
    }
}

// Clean form
var element = document.getElementsByTagName('input');

function clean() {
    for(let i = 0; i < element.length; i++){
        element[i].value = '';
        element[i].style.border = '1px solid #ccc';
    }
}

// Footer
const footers = document.querySelector('.footer');
const footer = document.createElement('div');
footer.classList = "container-footer"
footer.innerHTML = `
    <a href="index.html"><img class="logo" src="img/logo.png" alt="logo"></a>
    <div class="item-footer">
        <p class="paragraph-footer">P&aacute;gina creada por Yamil Espejo</p>
    </div>
    <nav>
        <ul>
            <li><a class="footer-list" href="https://www.facebook.com"><img src="img/facebook.png" alt="facebook"></a></li>
            <li><a class="footer-list" href="https://www.Instagram.com"><img src="img/instagram.png" alt="instagram"></a></li>
            <li><a class="footer-list" href="https://www.twitter.com"><img src="img/twitter.png" alt="twitter"></a></li>
            <li><a class="footer-list" href="https://www.linkedin.com"><img src="img/linkedin.png" alt="linkedin"></a></li>
        </ul>
    </nav>
`    
footers.appendChild(footer);