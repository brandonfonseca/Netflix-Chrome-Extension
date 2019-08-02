$(document).click(function() {
    const title_element = $('.title')[1];
    const title = title_element.getElementsByTagName('img')[0].alt;
    console.log(title);
    getRatings(title);

});

function getRatings(title) {
    $.get("https://www.omdbapi.com/?apikey=***REMOVED***&t="+title, function(data){
        console.log(data);
        const imdb_rating = data.imdbRating;
        const metescore = data.Metascore;
        const rotten_tomatoes_rating = getRottenTomatoScore(data);
        console.log(imdb_rating);
        console.log(metescore)
        console.log(rotten_tomatoes_rating)
    });

}

function getRottenTomatoScore(data) {
    const ratings_array = data.Ratings;
    if (ratings_array.length > 1) {
        if (ratings_array[1].Source == "Rotten Tomatoes") {
            return parseFloat(ratings_array[1].Value);
        }
    }
    return "N/A";
}
