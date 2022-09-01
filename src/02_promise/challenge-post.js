import fetch from "node-fetch"; // Se importa el módulo de fetch desde node
const API = "https://api.escuelajs.co/api/v1"; // se define la ruta base

function postData(urlAPI, data) { // Una función para enviar datos que recibe 2 argumentos: la URL y los datos
    const response = fetch(urlAPI, { //Se envía la URL y se le anexa un argumento más para señalarle que se hara una petición post
        method: "POST",
        mode: "cors",
        cedentials: "same-origin",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response;
}

const data = {
    title: "New Product Ikingari",
    price: 54321,
    description: "A description",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
    .then((response) => response.json())
    .then((data) => console.log(data));
