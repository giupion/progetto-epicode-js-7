document.addEventListener('DOMContentLoaded', () => {fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'GET', 
        headers: {
            Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDIzODcxNjAsImV4cCI6MTcwMzU5Njc2MH0.IriynzoJOkrKDzhh-wrqt_GUHEitj2W8gh-8jn4vpEk'
        }
    })
    .then(response => response.json())
    .then(json =>{
         
json.forEach(e => {
    let div = document.querySelector(".cardList")
    let card = document.createElement("div")
    div.appendChild(card)
    card.innerHTML = 
    `<div class="card m-2" style="width: 18rem; height: 98%">
        <img src="${e.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title">${e.name}</h5>
                <span class="badge rounded-pill text-bg-dark">${e.brand}</span>
            </div>
            <div>
                <p class="card-text">${e.price}€</p>
                <button type="button" class="btn btn-primary">Compra ora</button>
                <button type="button" class="btn btn-danger">Scarta</button>
            </div>
        </div>
    </div>`
});   
class Product {
    constructor(_name, _description, _brand, _imageUrl, _price) {
        this.name =_name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
        
    }
}

let p1 = new Product("Legend of zelda:Ocarina of Time ", "Special Edition n64", "Nintendo", "https://upload.wikimedia.org/wikipedia/it/thumb/b/b1/Zelda_oot_usa.jpg/260px-Zelda_oot_usa.jpg", 100);
console.log(p1);
let p2 = new Product("Legend of Zelda:Twilight Princess", "Special Edition Wii", "Nintendo", "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Legend_of_Zelda_Twilight_Princess_Game_Cover.jpg", 100);
console.log(p2);
let p3 = new Product("Pokemon Colosseum", "Special Edition Wii", "Nintendo", "https://m.media-amazon.com/images/I/91mcJesEIEL.jpg", 200);
console.log(p3); 
let p4 = new Product("Pokemon XD:Gale of Darkness", "Special Edition Gamecube", "Nintendo", "https://i.ebayimg.com/images/g/GP8AAOSwlaBkQGM5/s-l1600.jpg", 100);
console.log(p4);
let p5 = new Product("Tekken4", "Special Edition ps2", "Sony", "https://m.media-amazon.com/images/I/61nmCq+vbvL.jpg", 100);
console.log(p5);
let p6= new Product("Ico", "Special Edition ps2", "Sony", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F4%2F40%2FIco_cover_-_EU%252BJP.jpg&tbnid=zTsjGaaWRZQMIM&vet=12ahUKEwjClafe2YqDAxUJdqQEHREeDlUQMygAegQIARAq..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIco&docid=BkIt51xNN1dBvM&w=264&h=376&q=ico&safe=active&ved=2ahUKEwjClafe2YqDAxUJdqQEHREeDlUQMygAegQIARAq", 100);
console.log(p6);




  
// dati da mandare alla richiesta POST




  


 fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: "POST",
    body: JSON.stringify(),
    headers: {"Content-type": "application/json; charset=UTF-8",
    Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDIzODcxNjAsImV4cCI6MTcwMzU5Njc2MH0.IriynzoJOkrKDzhh-wrqt_GUHEitj2W8gh-8jn4vpEk'}
  })
  .then(response => response.json()) 
  .then(json => console.log(json));
  
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: 'DELETE',
    body: JSON.stringify(p6),
    headers: {
        'Authorization': ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDIzODcxNjAsImV4cCI6MTcwMzU5Njc2MH0.IriynzoJOkrKDzhh-wrqt_GUHEitj2W8gh-8jn4vpEk',
        'Content-type': 'application/json'
    }

.then(response => response.json())
.catch(error => console.log(error))
  })
 
})


    .catch(error => console.log(error))
})
