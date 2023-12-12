
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


