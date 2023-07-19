class DBService {
    static URL = 'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/shows'

    static getShows() {
        let url = DBService.URL
        return fetch(url, {method: "get" })
            .then((resp) => resp.json())
        }


    static upvoteShow(show){

        const upvoteUrl = URL + show.id;
        return fetch(upvoteUrl, {method: 'put',
        body: JSON.stringify(show),
        headers: {
            'content-type':'application/json'
        }})
        .then(resp => resp.json())
        .then(res => this.convertShow(res));
    }

    static convertShow(obj){
        const newShow = new Show(obj.title, obj.author, obj.isOver, obj.imageUrl, obj.upvotes, obj.downvotes);
    }










}