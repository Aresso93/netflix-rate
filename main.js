let manager;

DBService.getShows()
    .then(shows => {
    manager = new Manager(shows);
    render();
});

function render() {

    const main = document.getElementById("main-div");
    main.innerHTML = "";

    if (manager.shows) {
    for (const show of manager.shows) {
        const showCard = document.createElement("div");
        showCard.classList.add('card')

        const title = document.createElement("strong");
        const titleNode = document.createTextNode(show.title);

        title.appendChild(titleNode);
        showCard.appendChild(title);

        const author = document.createElement('span')
        const authorNode = document.createTextNode (show.author)


        const isOver= document.createElement('span')
        const isOverNode =document.createTextNode(isOverFunction(show))

        isOver.appendChild(isOverNode)
        showCard.appendChild(isOver)

        author.appendChild(authorNode);
        showCard.appendChild(author)

        const image = document.createElement('img')
        image.src= show.imageUrl

        showCard.appendChild(image)
        
        const upvoteBtn=document.createElement('button')
        const upvoteNode=document.createTextNode('👍')
        const downvoteBtn=document.createElement('button')
        const downvoteNode=document.createTextNode('👎')

        upvoteBtn.appendChild(upvoteNode)
        downvoteBtn.appendChild(downvoteNode)

        showCard.appendChild(upvoteBtn)
        showCard.appendChild(downvoteBtn)



        main.appendChild(showCard);
    }
    }
}

function isOverFunction(show) {
    if (show.isOver===true) {
        return 'finito'
    } else return 'in corso'
}
