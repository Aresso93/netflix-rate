class Show {
    constructor(title, author, isOver, imageUrl, upvotes = 0, downvotes = 0, id) {
        this.title = title;
        this.author = author;
        this.isOver = isOver;
        this.imageUrl = imageUrl;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.id = id;
    }

    compareByTitle(show){
        return this.title.localCompare(show.title);
    }

    listShowsHighestToLowestRating(show){
        return show.upvotes.localCompare(show.upvotes);
    }

    listShowsLowestToHighestRating(show){
        return show.downvotes.localCompare(show.downvotes);
    }
}
