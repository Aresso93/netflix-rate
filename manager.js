class Manager{
    constructor (shows=[]){
        this.shows=shows
    }

    addShow(show){
        this.shows.push(show);
    }

    orderShowsByName(){

        this.shows.sort((show1, show2) => show1.compareByTitle(show2)); 
    }


    orderShowsByHighestRating(){
        this.shows.sort((show1, show2) => show1.listShowsHighestToLowestRating(show2));
    }


    orderShowsByLowestRating(){
        this.shows.sort((show1, show2) => show1.listShowsLowestToHighestRating(show2));
    }


    addUpvote(i){
        const show = this.shows[i];
        show.upvotes = show.upvotes +1;
        DBService.upvoteShow(show);
    }

}
