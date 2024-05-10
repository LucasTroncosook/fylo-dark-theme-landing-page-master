const form = document.getElementById('form');
const sumbit = form.querySelector('section input[type="submit"]');
const emailValue = form.querySelector('section div input[type="text"]');
const errorMessage = form.querySelector('section div span');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validarEmail = (email) =>{
    if(email.trim() === "" || !emailRegex.test(email)){
        errorMessage.style.display = "flex";
        return false;
    }
    errorMessage.style.display = "none";
    return true;
}

const verificarCorreo = (e)=>{
    e.preventDefault();
    const email = emailValue.value;

    if(!validarEmail(email)){
        return
    }
}

sumbit.addEventListener('click', verificarCorreo);
