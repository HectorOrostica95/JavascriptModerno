//Variable 
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");
const btnReset = document.getElementById("resetBtn");

//Event
eventListeners()

function eventListeners() {
    //Inicio de la aplicacion y deshabilitar Submit
    document.addEventListener("DOMContentLoaded", inicioApp);

    //Campos del Formulario
    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);

    //Botonn de enviar en el submit
    formularioEnviar.addEventListener("submit", enviarEmail);

    //Boton de reset
    btnReset.addEventListener("click",resetFormulario);
}

//Funciones
function inicioApp() {
    //Deshabilitar el envio
    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {
    //Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    //Validar unicamente el email
    if (this.type === "email") {
        validarEmail(this);
    }

    let errores = document.querySelectorAll(".error");

    if(email.value !== "" && asunto.value !== "" && mensaje.value !== ""){
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

//Resetear el formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

//Cuadno se envia el correo
function enviarEmail(e) {
    //Al enviar correctamente el correo se debe mostrar el Spinner

    const spinnerGif = document.querySelector("#spinner");
    spinnerGif.style.display = "block";

    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";

    //Ocultar Spinner y mostrar git de enviado
    setTimeout(function () {
        spinnerGif.style.display = "none";
        document.querySelector("#loaders").appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.requestFullscreen();
        }, 4000);

    }, 3000);

    console.log("Mail enviado");
    e.preventDefault();

}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor= "green";
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor= "red";
        campo.classList.add("error");
    }
}

//Realiza la validacion del correo electronico
function validarEmail(campo) {
    const mensaje = campo.value;

    if(mensaje.indexOf("@") !== -1){
        campo.style.borderBottomColor ="green";
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}