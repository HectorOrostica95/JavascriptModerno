/* 
    Lo que se realiza en Javascript es trabajar con el localStorage y mediante
    un boton se agrega datos a una lista, tambien se pueden eliminar las frases creadas.
*/

//Variables
const listaTweets = document.getElementById("lista-tweets");

//Event Listeners
eventListeners();

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector("#formulario").addEventListener("submit", agregarTweet);

    //Borrar Tweets
    listaTweets.addEventListener("click", borrarTweet);

    //Cargando contenido del localStorage
    document.addEventListener("DOMContentLoaded", localStorageListo);
}

//Funciones

//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del textArea
    const tweet = document.getElementById("tweet").value;
    //Crear boton de eliminar 
    const botonBorrar = document.createElement("a");
    //Busca la clase con el nombre de "borrar-tweet"
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "X";

    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement("li");
    li.innerText = tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //Añade el teweet a la lista
    listaTweets.appendChild(li);

    //Añadir a local Storage
    agregarTweetLocalStorage(tweet);
}

//Elimina el Tweet del DOM
function borrarTweet(e) {
    //Previene el evento para validarlo antes
    e.preventDefault();
    //Valida que el usuario haya presionado en la "X"
    if (e.target.className === "borrar-tweet") {
        //Elimina de la lista
        e.target.parentElement.remove();
        //Llama a la funcion para eliminar los datos del LocalStorage
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//Mostrar datos de localStorage en la lista
function localStorageListo() {
    let tweets;
    
    //Llama a la funcion para obtener los datos de localStorage
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        //Crear boton de eliminar 
        const botonBorrar = document.createElement("a");
        botonBorrar.classList = "borrar-tweet";
        botonBorrar.innerText = "X";

        //Crear elemento y añadirle el contenido a la lista
        const li = document.createElement("li");
        li.innerText = tweet;
        //Añade el boton de borrar al tweet
        li.appendChild(botonBorrar);
        //Añade el teweet a la lista
        listaTweets.appendChild(li);
    });
}

//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir el nuevo tweet
    tweets.push(tweet);
    //Convertir de string a arreglo para local storage
    localStorage.setItem("tweets", JSON.stringify(tweets) );
}

//Comprobar que haya elementos en localStorage, retorna un arreglo
function obtenerTweetsLocalStorage() { 
    let tweets;

    //revisamos los valores de local Storage
    if (localStorage.getItem("tweets") === null) {
        //Si no existe nada se crea el arreglo
        tweets = [];
    } else {
        //Si existen datos estos se traen para cargarlos en la pantalla
        tweets = JSON.parse( localStorage.getItem("tweets") );
    }
    //Retorna los datos para que estos sean visualizados
    return tweets;
}

//Eliminar Tweet de local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;

    //Elimina la X del Tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1)

    //Se obtienen los datos de los Tweet almacenados en el LocalStorage
    tweets = obtenerTweetsLocalStorage();
    
    tweets.forEach(function (tweet, index) { 
        //Se busca el tweet que es igual al que se desea eliminar
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    //Se cargan los datos nuevamente en el LocalStorage
    localStorage.setItem("tweets", JSON.stringify(tweets) );
}