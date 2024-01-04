//metto un ascoltatore generico sulla pagina cosi attendo caricamento DOM


document.addEventListener("DOMContentLoaded",()=>{


//mi occupo di collegare il form e di validarlo, faccio richiesta post

const key="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQzMDM3MDIsImV4cCI6MTcwNTUxMzMwMn0.kTlrhGQEsFsuvEHzmBRZnB55hjOo-JoseKD6DQEq_Vs"

const url="https://striveschool-api.herokuapp.com/api/product"

const type="application/json"

//è una funzione che manda il prodotto cosicche la salviamo nel json






//con trim elimino spazio all 'inizio, poi seleziono l'input corretto e lo memorizzo in un oggetto con le sue proprietà uguali al valore dell'input, value è una proprietà di input
 function aggiungiProdotto(){

    let prd={
    nome:document.querySelector('#form-products input#nome-prodotto').value.trim(),
   marchio:  document.querySelector('#form-products input#marchio').value.trim(),
    immagine: document.querySelector('#form-products input#url-immagine').value.trim(),
    prezzo: document.querySelector('#form-products input#prezzo-prodotto').value.trim(),
    descrizione:  document.querySelector('#form-products input#descrizione-prodotto').value.trim(),
}



}






})