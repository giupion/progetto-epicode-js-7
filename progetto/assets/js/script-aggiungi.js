//metto un ascoltatore generico sulla pagina cosi attendo caricamento DOM


document.addEventListener("DOMContentLoaded",()=>{


//mi occupo di collegare il form e di validarlo, faccio richiesta post

const key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQzMDM3MDIsImV4cCI6MTcwNTUxMzMwMn0.kTlrhGQEsFsuvEHzmBRZnB55hjOo-JoseKD6DQEq_Vs"

const url="https://striveschool-api.herokuapp.com/api/product"

const type="application/json"

//è una funzione che manda il prodotto cosicche la salviamo nel json






//con trim elimino spazio all 'inizio, poi seleziono l'input corretto e lo memorizzo in un oggetto con le sue proprietà uguali al valore dell'input, value è una proprietà di input


    let prd={
    name:document.querySelector(' input#nome-prodotto').value.trim(),
    
   brand:  document.querySelector(' input#marchio').value.trim(),
    imageUrl: document.querySelector(' input#url-immagine').value.trim(),
    price: document.querySelector(' input#prezzo-prodotto').value.trim(),
    



}



document.querySelector('#buttonadd').addEventListener('onclick',()=>{fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: "POST",
    body: JSON.stringify(prd),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQ0NjI4MDksImV4cCI6MTcwNTY3MjQwOX0.FntuC1oARFezqS7gJHYK8dBuKeV_K9QaXtZC6DOjSdo'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

    .catch(error => console.log(error))

//manca la roba di decidere dei bottoni e capire in che pagina siamo


})
})