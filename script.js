const form = {
    userName: document.getElementById('userName'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    button: document.querySelector('.button'),
    inputs: document.querySelectorAll('input'),
    error: document.querySelector('.input-error')
}

const inputsLength = form.inputs.length + 2

function checkForm() {
    const userName = form.userName.getElementsByTagName('input')[0].value
    const email = form.email.getElementsByTagName('input')[0].value
    const phone = form.phone.getElementsByTagName('input')[0].value

    if (userName && email && phone) {
        form.button.classList.remove('disable')
    } else {
        form.button.classList.add('disable')
    }
}

function handleInput(e, name) {
    const { value } = e.target

    if (value) {
        form[name].classList.add('filed') 
    } else {
        form[name].classList.remove('filed')
    }
    checkForm()
}

function validateEmail(e) {
    const { value } = form.email.getElementsByTagName('input')[0]
    const v = form.email.getElementsByTagName('input')
    const reg = /[a-z]{2,20}@[a-z]{2,10}\.[a-z]{2,4}/

    if (reg.test(value)) {
        alert('Form submitted successfully')
        form.email.classList.remove('error')
        form.error.classList.remove('view')
    } else if (v.length <= inputsLength) {
        form.button.classList.add('disable')
        form.email.classList.add('error')
        form.error.classList.add('view')
    }
    
}



form.userName.oninput = (e) => handleInput(e, 'userName')
form.email.oninput = (e) => handleInput(e, 'email')
form.phone.oninput = (e) => handleInput(e, 'phone')
form.button.onclick = validateEmail
