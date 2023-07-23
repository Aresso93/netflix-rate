document.addEventListener('DOMContentLoaded', () =>{
    const app = new AppController();

app.init();

const createDialog = document.getElementById('create-dialog');
const showDialogButton = document.getElementById('show-dialog');

showDialogButton.addEventListener("click", () => {
    createDialog.showModal();
});

const createForm = document.querySelector('form');
createForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const isOver = document.getElementById('isOver').checked;

    const show = {
        title: title,
        author: author,
        imageUrl: imageUrl,
        isOver: isOver,
        upvotes: 0,
        downvotes: 0
    };

    DBService.createShow(show).then((newShow) => {
        app.shows.push(newShow);
        app.renderShows();
        createDialog.close();
    });
});

});

