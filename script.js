
//let crea un espacio de memoria para guardar algo//

//json formato que javascript entiende..then(reposta=>reposta.json) entonces trae respuesta y convierte en json
//sync es el que permite la entrada al servidor//
//fetch es el que busca la informacion en el servidor//
//then es el que agarra la repuesta del servidor//
//a su vez then convierte la respuesta eedn un formato json//
//https://openweathermap.org/api//link de la pagina para acceder a las informaciones.
//& se usa para separar.


let chaves = "5b28869ba46b5b55a55429ec7176b31f"



function botonclicado() {
    const ciudad = document.querySelector(".input-ciudad").value

    buscarciudad(ciudad)
}


async function buscarciudad(ciudad) {

    let datos = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + ciudad + "&appid=5b28869ba46b5b55a55429ec7176b31f&units=metric").then((reposta) => reposta.json())

    mostrardatos(datos)
    console.log(datos)
}



function mostrardatos(datos) {
    console.log(datos)

   document.querySelector (".ciudad").innerHTML = "tiempo en " + datos.name
   document.querySelector (".grados").innerHTML = Math.floor(datos.main.temp) + "ºC"
   document.querySelector (".icono").src = "https://openweathermap.org/img/wn/" + datos.weather[0].icon + ".png"
   document.querySelector (".nuves").innerHTML = datos.weather[0].description   
   document.querySelector (".humedad").innerHTML = "humedad.." + datos.main.humidity + "%"
   document.querySelector (".velocidad").innerHTML = "viento.." +  Math.floor(datos.wind.speed) + "km/h"


}




//function colocanatela(dados) {

//  console.log(dados)

//   document.queryselector(".ciudad").innerhtml = "tempo em" + dados.name
//  document.queryselector(".grados").innerhtml = Math.floor(dados.main.temp) + "ºC"
//  document.queryselector("nuves").innerhtml = dados.wather[0].description
//  document.queryselector("icono").src = "https://openwathermap.org/img/wn/" + dados.wather.[0].icon + ".png"
//innerhtml sirve para cambiar el texto deacuerdo se busque el la internet
//}


