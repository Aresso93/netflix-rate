class AppController{

constructor(){
    this.shows = [];
    this.isVoting = false;
    this.orderMethod = 'upvote';
}

init(){
    this.render();
    DBService.getAllShows().then((shows) => {
        this.shows = shows;
        this.renderShows();                         //cosa fa qui esattamente?
    })
}



render(){

    const appContainer = document.getElementById("app");

    appContainer.innerHTML = `
    <header>
        <h1>Netflix Score</h1>
        <a href="./index.html">lista</a>
    </header>
    <main>
        <div id="btn-container"></div>
        <ul id="shows-container"></ul>
        </main>
        <footer>
            <p>Tuttini i dirittini riservatini</p>
        </footer>
    `;

}

renderShows(){

    if (this.orderMethod === 'upvote'){

        this.shows.sort((s1, s2) => s2.upvotes - s1.upvotes);

    } else if(this.orderMethod === 'downvote') {

        this.shows.sort((s1, s2) => s2.downvotes - s1.downvotes);
    }

    const btnContainer = document.getElementById("btn-container");
    btnContainer.innerHTML = "";

    const sortUpButton = document.createElement("button");
    sortUpButton.appendChild(document.createTextNode("Ordina per upvote"));
    sortUpButton.addEventListener("click", () => this.sortByUpvotes());
    btnContainer.appendChild(sortUpButton);

    const sortDownButton = document.createElement("button");
    sortDownButton.appendChild(document.createTextNode("Ordina per downvote"));
    sortDownButton.addEventListener("click", () => this.sortByDownvotes());
    btnContainer.appendChild(sortDownButton);


    const showsContainer = document.getElementById("shows-container");
    showsContainer.innerHTML = '';

    for (let i = 0; i < this.shows.length; i++) {
        const show = this.shows[i];

        const showCard = document.createElement('div');
        showCard.classList.add('show-card');
        const titleNode = document.createTextNode(show.title);
        showCard.appendChild(titleNode);

        //AUTORE DELLO SHOW

        const authorSpan = document.createElement('span');
        authorSpan.appendChild(document.createTextNode('Scritto da: '+ show.author));
        showCard.appendChild(authorSpan)
        //IMMAGINE DELLA LOCANDINA DELLO SHOW

        const coverImage = document.createElement('img');
        coverImage.src = show.imageUrl;
        coverImage.alt = show.title;
        showCard.appendChild(coverImage);
       
        //BOTTONE COL POLLICE SU
        const upvoteButton = document.createElement('button');
        upvoteButton.appendChild(document.createTextNode('Assegna un upvote a questo show 👍'))
        upvoteButton.addEventListener("click", () => this.upvoteShow(show));
        showCard.appendChild(upvoteButton);

        const upvoteSpan = document.createElement('span');
        upvoteSpan.appendChild(document.createTextNode('Upvotes totali: ' + show.upvotes));
        upvoteSpan.classList.add('upvote-span');
        showCard.appendChild(upvoteSpan);

        //BOTTONE COL POLLICE GIù

        const downvoteButton = document.createElement('button');
        downvoteButton.appendChild(document.createTextNode('Assegna un downvote a questo show 👎'))
        downvoteButton.addEventListener("click", () => this.downvoteShow(show));
        showCard.appendChild(downvoteButton);

        const downvoteSpan = document.createElement('span');
        downvoteSpan.appendChild(document.createTextNode('Downvotes totali: ' + show.downvotes));
        downvoteSpan.classList.add('downvote-span');
        showCard.appendChild(downvoteSpan);

       

        showsContainer.appendChild(showCard);

    }


}

    upvoteShow(show){
        if (!this.isVoting) {
            this.isVoting = true;
            DBService.upvote(show).then((show) => {
                this.renderShows();
                this.isVoting = false;
            })
        }
    }

    downvoteShow(show){
        if (!this.isVoting) {
            this.isVoting = true;
            DBService.downvote(show).then((show) => {
                this.renderShows();
                this.isVoting = false;
            })
        }
    }

    sortByUpvotes(){
        this.orderMethod = 'upvote';
        this.shows.sort((s1, s2) => s2.upvotes - s1.upvotes);
        this.renderShows();
    }

    sortByDownvotes(){
        this.orderMethod = 'downvote';
        this.shows.sort((s1, s2) => s2.downvotes - s1.downvotes);
        this.renderShows();
    }

}