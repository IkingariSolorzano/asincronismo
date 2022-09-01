//RETO CON LA APP DE PLATZI
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // aquí generamos una constante que represente la librería que importamos
// La librería se instaló con >> npm i xmlhttprequest
const API = "https://pokeapi.co/api/v2"; // Aquí generamos una constante que indique la ruta a la que vamos a consultar

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlAPI, true); // abrimos una conexión.
    xhttp.onreadystatechange = (e) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error aquí: ${urlAPI}`);
                return callback(error, null);
            }
        }
    };
    xhttp.send();
}

fetchData(`${API}/pokemon`, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(data1.results[0].url, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(`${API}/pokemon/${data2.id}`, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data1.results[0].url);
            console.log("aqui va la data 2:\n" + data2.name + "\n" + data2.id);
            console.log("aqui va la data 3:\n" + data3.types[0].type.name);
        });
    });
});

// RETO CON LA API DE RICK AND MORTY

// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// let API = "https://rickandmortyapi.com/api/character/";

// function fetchData(url, callback) {
//   let xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url, true);
//   xhttp.onreadystatechange = function (event) {
//     if (xhttp.readyState == 4) {
//       if (xhttp.status == 200) {
//         callback(null, JSON.parse(xhttp.responseText));
//       } else {
//         const error = new Error("Error" + url);
//         return callback(error, null);
//       }
//     }
//   };
//   xhttp.send();
// }

// fetchData(API, function (error1, data1) {
//   if (error1) {
//     return console.error(error1);
//   } else {
//     fetchData(API + data1.results[12].id, function (error2, data2) {
//       if (error2) {
//         return console.error(error2);
//       } else {
//         fetchData(data2.origin.url, function (error3, data3) {
//           if (error3) {
//             return console.error(error3);
//           } else {
//             console.log(data1.info.count);
//             console.log(data2.name);
//             console.log(data3.dimension);
//           }
//         });
//       }
//     });
//   }
// });
