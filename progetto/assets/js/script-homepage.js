//verifica le funzionalita di ogni pagina e scrivi  quello che si deve fare per ogni pagina
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector("#form-products")) {
        //Setto un listener sul btn del form e richiamo la funzione di validazione
        document
          .querySelector("#btn-add")
          .addEventListener("click",declareAndAddProduct);
        //Setto un listener sul btn del form per il reset e richiamo la funzione di reset
        document
          .querySelector("#btn-reset-yes")
          .addEventListener("click", resetFormAdd);
        //Se è presente il div content-list della pagina modifica prodotto
      }  else {
        //e che quindi mostra l'elenco
        get()
      }
      


      function resetFormAdd(){}




    function get(){fetch('https://striveschool-api.herokuapp.com/api/product/', {
             method: 'GET',
         headers: {
            Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQ2NDYyOTQsImV4cCI6MTcwNTg1NTg5NH0.Ia1bCBWLR7cH9O6eVrGPU2nyEeWzywK_WWj9YGSWe4w'
               }
          })
         .then(response => response.json())
         .then(json => 
            console.log(json))}

            function card(){
              
                let div = document.querySelector(".cardList")
                let card = document.createElement("div")
                div.appendChild(card)
                card.innerHTML =
                    `<div class="card m-2" style="width: 18rem; height: 98%">
                     <img src="${e.imageUrl}" class="card-img-top" alt="..." width="98%" height="98%">
                     <div class="card-body d-flex flex-column justify-content-between">
                         <div>
                            <h5 class="card-title">${e.name}</h5>
                            <span class="badge rounded-pill text-bg-dark">${e.brand}</span>
                         </div>
                             <div>
                                <p class="card-text">${e._id}</p>
                                <p class="card-text">${e.price}€</p>
                                <button type="button" class="btn btn-primary">Compra ora</button>
                                <button type="button" class="btn btn-danger id="buttondelete">Scarta</button>
                              </div>
                             </div>
                             </div>`
              }
        
      
    
          



   
   function sendProduct(prd) {
    console.log(prd);
   
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
      headers: {
        "Content-Type": type, // il tipo del contenuto che sto inviando
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQ2NDYyOTQsImV4cCI6MTcwNTg1NTg5NH0.Ia1bCBWLR7cH9O6eVrGPU2nyEeWzywK_WWj9YGSWe4w',
                        },
                        // Chiamata di tipo POST
                        method: "POST", // Method della chiamata - Salvataggio di una risorsa
                        body: JSON.stringify(prd), // nel body della richiesta invio il dato al server
                      });
                    }
                    //Dichiaro la mia funzione declareProduct per creare un oggetto da trasmettere a mezzo POST con json
                    function declareAndAddProduct() {
                    
                      //Creo l'oggetto
                      let prd = {
                        name: document.querySelector("#form-products input#nome-prodotto").value.trim(),
                        brand: document.querySelector("#form-products input#marchio").value.trim(),
                        imageUrl: document.querySelector("#form-products input#url-immagine").value.trim(),
                        price: parseInt(document.querySelector("#form-products input#prezzo-prodotto").value),
                        description: document.querySelector("#form-products input#descrizione-prodotto").value.trim(),
                      };
                      sendProduct(prd);
                      console.log(prd);
                    }
                      
                      //manca la roba di decidere dei bottoni e capire in che pagina siamo
    
  })





/*
    class Product {
        constructor(_name, _description, _brand, _imageUrl, _price) {
            this.name = _name;
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
    let p6 = new Product("Ico", "Special Edition ps2", "Sony", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F4%2F40%2FIco_cover_-_EU%252BJP.jpg&tbnid=zTsjGaaWRZQMIM&vet=12ahUKEwjClafe2YqDAxUJdqQEHREeDlUQMygAegQIARAq..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIco&docid=BkIt51xNN1dBvM&w=264&h=376&q=ico&safe=active&ved=2ahUKEwjClafe2YqDAxUJdqQEHREeDlUQMygAegQIARAq", 100);
    console.log(p6);
    let p26 = new Product("Metal gear solid", "Special Edition ps2", "Sony", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81dl6xftxSL._AC_UF894%2C1000_QL80_.jpg&tbnid=GcglBYsUsR4HxM&vet=12ahUKEwjawYal-sGDAxV4i_0HHfDcDY4QMygAegQIARBF..i&imgrefurl=https%3A%2F%2Fwww.amazon.it%2FMetal-Gear-Solid-2-Ps2%2Fdp%2FB0044APYH6&docid=NL1YzCQUs0L6JM&w=763&h=1000&q=metal%20gear%20solid%20ps2&safe=active&ved=2ahUKEwjawYal-sGDAxV4i_0HHfDcDY4QMygAegQIARBF", 100);
    console.log(p26);

    let p27 = new Product("Metal gear solid 2", "Special ps2", "Sony", "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.hardcoregaming101.net%2Fwp-content%2Fuploads%2F2023%2F05%2Fmetal-gear-solid-2-86.png&tbnid=7aamaNy8DWybHM&vet=12ahUKEwjawYal-sGDAxV4i_0HHfDcDY4QMygVegQIARB6..i&imgrefurl=http%3A%2F%2Fwww.hardcoregaming101.net%2Fmetal-gear-solid-2%2F&docid=f92H7Oy0NO0haM&w=1280&h=720&q=metal%20gear%20solid%20ps2&safe=active&ved=2ahUKEwjawYal-sGDAxV4i_0HHfDcDY4QMygVegQIARB6", 100);
    console.log(p27); 



    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: "POST",
        body: JSON.stringify(),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQ2NDYyOTQsImV4cCI6MTcwNTg1NTg5NH0.Ia1bCBWLR7cH9O6eVrGPU2nyEeWzywK_WWj9YGSWe4w'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))

        .catch(error => console.log(error))


       fetch('https://striveschool-api.herokuapp.com/api/product/' + '6578917526761400183c34f1', {
        method: 'DELETE',

        headers: {
            'Authorization': ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDQ2NDYyOTQsImV4cCI6MTcwNTg1NTg5NH0.Ia1bCBWLR7cH9O6eVrGPU2nyEeWzywK_WWj9YGSWe4w',
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))


        .catch(error => console.log(error))


*/


