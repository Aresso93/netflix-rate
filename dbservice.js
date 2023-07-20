class DBService {
    static BASE_URL = 'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/'

    static getShows() {
        let url = DBService.BASE_URL + 'shows'
        return fetch(url, {method: "get" })
            .then(resp =>(resp.json()))
        }


    static upvoteShow(show){

        const upvoteUrl = this.BASE_URL + 'shows/' + show.id;
        return fetch(upvoteUrl, {method: 'put',
        body: JSON.stringify(show),
        headers: {
            'content-type':'application/json'
        }})
        .then(resp => resp.json())
        .then(res => this.convertShows(res));
    }

    static convertShows(objArray){
        let newShows = []
        for (let i = 0; i < objArray.length; i++) {
            const obj = objArray[i];
            const newShow = new Show(obj.title, obj.author, obj.isOver, obj.imageUrl, obj.upvotes, obj.downvotes, obj.id);
            newShows.push(newShow);
        }
        
        return newShows;
    }










}