class DBService{


    static getAllShows(){

        const url = 'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/shows';
        return fetch(url).then((resp) => resp.json());
    }


    //UPDATE DEGLI SHOW

    static updateShow(show){

        const updateUrl =
        'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/shows/' + show.id;

        return fetch(updateUrl, {
            method: 'put',
            body: JSON.stringify(show),
            headers: {"content-type":"application/json"},
        }).then((resp) => resp.json());

    }


    //CREATE DEGLI SHOW

    static createShow(show){

        const createUrl = 'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/shows';

        return fetch(createUrl, {
            method: 'post',
            body: JSON.stringify(show),
            headers: {"content-type":"applicati0n/json"},
        }).then((resp) => resp.json());
    }

    //FUNZIONI DI UPVOTE E DOWNVOTE

    static upvote(show){
        show.upvotes++;
        return this.updateShow(show);
    }

    static downvote(show){
        show.downvotes++;
        return this.updateShow(show);
    }


}