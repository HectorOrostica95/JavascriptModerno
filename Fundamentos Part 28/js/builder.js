class Formulario {
    constructor() {
        this.campos = []
    }
    agregarCampo(tipo, texto){
        let campos = this.campos;

        let campo;

        switch (tipo) {
            case "text":
                campo = new InputText(texto);
                break;
                case "email":
                campo = new InputEmail(texto);                
                break;
                case "button":
                campo = new Button(texto);                
                break;

            default:
                throw new Error ("Tipo no valido" + tipo);
        }
        campos.push(campo);
    }

    obtenerFormulario() {
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;

        for (let i = 0; i < campos; i++) {
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;
    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const InputText = document.createElement('input');
        InputText.setAttribute('type', 'text');
        InputText.setAttribute('placeholder', this.texto);
        return InputText;
    }
}

class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const InputEmail = document.createElement('input');
        InputEmail.setAttribute('type', 'email');
        InputEmail.setAttribute('placeholder', this.texto);
        return InputEmail;
    }
}

class Button extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const Button = document.createElement('button');
        Button.setAttribute('type', 'submit');
        Button.textContent = this.texto;
        return Button;
    }
}

//Instanciar el formulario
const formulario = new Formulario();
formulario.agregarCampo('text', 'Añade tu nombre');
formulario.agregarCampo('text', 'Añade tu apellido');
formulario.agregarCampo('email', 'Añade tu correo');
formulario.agregarCampo('button', 'Enviar formulario');

//Renderizar en el HTML
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').appendChild(formulario.obtenerFormulario());
});
console.log(formulario);