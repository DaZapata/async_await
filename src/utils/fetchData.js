// requerimo el httprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


// funcion para que haga las peticiones
const fetchData = (url_api) => {
    return new Promise((resolve, reject) =>{
        const xhttp = new XMLHttpRequest()
        // abrimos la conexion
        xhttp.open('GET', url_api, true)
        // validacion del estado, el status, si esto sucede ejecutamos el callback
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4){
               (xhttp.status === 200) 
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('Error ', url_api))
            }
        })
        xhttp.send();

    })
}

module.exports = fetchData