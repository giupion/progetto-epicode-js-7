
/*Per creare nuovi prodotti dovrai partire da questo modello come riferimento, e formarlo con alcune delle proprietà richieste per poi inviarlo come payload della chiamata POST.
OGNI CHIAMATA DOVRÀ ESSERE AUTENTICATA! L’autenticazione di queste API è una “Token Based Authentication” per rendere privato l’accesso ai suoi contenuti. Senza essere autenticato non potrai ottenere i dati di cui hai bisogno.
Per prima cosa dovrai recuperare un tuo token personale registrandoti su: https://strive.school/studentlogin
Il token dovrà venire utilizzato come "authorization" header.
Obiettivi generali:

    Avere una pagina back-office, in cui si potranno inserire i prodotti specificando i parametri obbligatori e facoltativi.
    Una homepage, dove l’utente possa vedere i prodotti disponibili
    Una pagina di dettaglio in cui visualizzare tutti i dettagli del prodotto.

Task:

    Nella pagina di back-office: usa POST su /product con un payload per creare una nuova risorsa.
    Aggiungi un bottone per la funzionalità di modifica di un prodotto già creato in precedenza (usa una PUT su /product/[PRODUCT_ID]).
    Aggiungi un bottone per la cancellazione di uno specifico prodotto già esistente (usa DELETE su /product/[PRODUCT_ID]).
    I tasti “modifica” e “cancella”  dovranno essere visibili SOLO se si è in modalità di modifica della risorsa.
    Aggiungi una validazione di base per la creazione/modifica del prodotto nel form.
    Aggiungi un bottone “Reset” per resettare il form.
    Nella Homepage: premendo un bottone “modifica” su un prodotto si dovrà poterlo modificare.
    Nella pagina Dettaglio: A questa pagina ci si arriverà cliccando un bottone “Scopri di più” sulla card in homepage.

EXTRAS:

    In back-office: I bottoni “reset” e “delete” dovranno chiedere conferma prima di procedere con l’operazione.
    In homepage: aggiungi un indicatore di caricamento affianco al titolo principale della pagina durante il caricamento delle risorse.
    Crea un sistema di gestione degli errori. Mostra all’utente un messaggio di errore specifico per le varie tipologie di problema, quando qualcosa va storto, attraverso l’utilizzo di componenti di Bootstrap appropriati.

FAQ:
“Nelle mie API non c’è niente, come mai?”
All'inizio ognuno di voi partirà con array di prodotti vuoto, createne qualcuno prima!😊
“Ricevo un errore con 500, c’è qualcosa che non va lato server?”
Molto probabilmente no, controlla sul tab Network che la tua richiesta contenga tutti i campi richiesti, con le chiavi corrette, e che sia inviata in formato JSON. La preview della risposta dal server spesso ti dice cosa c’è che non va.Di solito:

    Manca un campo obbligatorio
    Hai una “duplicate key”, che significa che qualcosa con lo stesso valore esiste già.
    Stai inviando il tipo di dato sbagliato (es. una stringa invece di un numero sul campo “price”)

Imparare a leggere gli errori è molto importante, sono i tuoi migliori amici!*/


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

arraygiochi=[]
arraygiochi.push(p1,p2,p3,p4,p5)
console.log(arraygiochi)


  
// dati da mandare alla richiesta POST


  let p9 = {
    name: "Pokemon White",
    description: "Special Edition NDS",
    brand:"Nintendo",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GrTVt0G9DE3BlKtWUY1_u-GSx4U2pk9RYA&usqp=CAU",
    price:100,
  }
  

  let p10 = {
    name: "Pokemon black",
    description: "Special Edition NDS",
    brand:"Nintendo",
    imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F4%2F40%2FIco_cover_-_EU%252BJP.jpg&tbnid=zTsjGaaWRZQMIM&vet=12ahUKEwjCusnssIqDAxUc6AIHHeX1AvwQMygAegQIARAq..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIco&docid=BkIt51xNN1dBvM&w=264&h=376&q=ico&safe=active&ved=2ahUKEwjCusnssIqDAxUc6AIHHeX1AvwQMygAegQIARAq",
    price:100
  }
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: "POST",
    body: JSON.stringify(p10),
    headers: {"Content-type": "application/json; charset=UTF-8",
    Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDIzODcxNjAsImV4cCI6MTcwMzU5Njc2MH0.IriynzoJOkrKDzhh-wrqt_GUHEitj2W8gh-8jn4vpEk'}
  })
  .then(response => response.json()) 
  .then(json => console.log(json));
  