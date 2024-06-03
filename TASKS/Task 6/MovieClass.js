
//Class Movie with Constructor with parameters as title , studio and rating
class movie { //(a)
    constructor(title, studio, rating="PG"){//"b")
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    //getPG filter (c)
    static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
    }

}

//casinoRoyale (d)
const casinoRoyale = new movie("Casino Royale","Eon Productions","PG-13");


