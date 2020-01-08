//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners

eventListeners();

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrando los tweets
    listaTweets.addEventListener('click', borrarTweet)

    //Cargando datos desde local storage al html
    document.addEventListener('DOMContentLoaded', localStorageListo)

}

//Funciones

//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // console.log('Formulario enviado');

    //Leer los datos ingresados en el recuadro (text Area)
    const tweet = document.getElementById('tweet').value;

    //Crear boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X'

    //Crear elemento 
    const li = document.createElement('li');
    li.innerText = tweet;

    //Añadir el boton borrar al tweet
    li.appendChild(botonBorrar);

    //Añadir el contenido(tweet) a la lista
    listaTweets.appendChild(li);

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);

    //Limpiando el text area
    // console.log(tweet);
    document.getElementById('tweet').value = '';
    
}

//Eliminar el Tweet dedl Dom
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        // console.log('Diste click en eliminar');        
        // console.log(e.target.parentElement.remove());        
        e.target.parentElement.remove();
        // alert('Tweet Eliminado');
        // console.log(e.target.parentElement.innerText)
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
    // console.log('Diste click en la lista');
}

//Mostrar datos del localStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetLocalStorage();
    // console.log(tweets);

    tweets.forEach(tweet => {
        //Crear boton de eliminar 
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X'

        //Crear elemento 
        const li = document.createElement('li');
        li.innerText = tweet;

        //Añadir el boton borrar al tweet
        li.appendChild(botonBorrar);

        //Añadir el contenido(tweet) a la lista
        listaTweets.appendChild(li);
    });
    
}

//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;

    // obteniendo los tweets
    tweets = obtenerTweetLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de string a arreglo para le local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));


    //Agregar a local storage
    // localStorage.setItem('tweets', tweet);
}

//Comprobamos que haya elementos en local storage, retorna un arreglo
function obtenerTweetLocalStorage(){
    let tweets;

    //revisamos los valores de local storage 
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;

    //En la variable tweetBorrar se almacenará el tweet sin la X
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    //Trae los tweets del Local Storage
    tweets = obtenerTweetLocalStorage();
    // console.log(tweet);

    tweets.forEach( function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    // console.log(tweets);
    // console.log(tweetBorrar);
    
    localStorage.setItem('tweets', JSON.stringify(tweets));
}