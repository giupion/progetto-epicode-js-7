fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'GET', 
        headers: {
            Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDIzODcxNjAsImV4cCI6MTcwMzU5Njc2MH0.IriynzoJOkrKDzhh-wrqt_GUHEitj2W8gh-8jn4vpEk'
        }
    })
    .then(response => response.json())
    .then(json =>{
         console.log(json)
        class Product {
        constructor(_name, _descriptionconsole, _brand, _imageUrl, _price) {
            this.name = _name;
            this.description = _descriptionconsole;
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
    
console.log(json)
    
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

})
    
    .catch(error => console.log(error))

   