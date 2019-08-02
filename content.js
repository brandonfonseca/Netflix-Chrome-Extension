var past_title = ""
$(document).click(function() {
    const title_element_array = $('.title');
    const title_element = title_element_array[title_element_array.length - 1];
    const title = title_element.getElementsByTagName('img')[0].alt;
    if (title === past_title){
        return
    }
    past_title = title;
    console.log(title);
    injectData(getRatings(title));
});

function getRatings(title) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.omdbapi.com/?apikey=***REMOVED***&t="+title, false );
    xmlHttp.send( null );
    data = JSON.parse(xmlHttp.response);
    const imdb_rating = data.imdbRating;
    const metescore = data.Metascore;
    const rotten_tomatoes_rating = getRottenTomatoScore(data);
    ratings = {
        "IMDB": imdb_rating,
        "Metascore": metescore,
        "Rotten Tomatoes": rotten_tomatoes_rating
    };
    return ratings
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

function injectData(ratings){
    node_array = $('.video-meta ');
    node = node_array[node_array.length - 1];
    var imdb_span = document.createElement("SPAN");
    var metascore_span = document.createElement("SPAN");
    var rotten_tomatoes_span = document.createElement("SPAN");
    var imdb_score = document.createTextNode("   IMDB: " + ratings["IMDB"].toString());
    var metascore = document.createTextNode("    Metascore: " + ratings["Metascore"].toString());
    var rotten_tomatoes = document.createTextNode("   Rotten Tomatoes: " + ratings["Rotten Tomatoes"].toString());
    imdb_span.appendChild(imdb_score);
    metascore_span.appendChild(metascore);
    rotten_tomatoes_span.appendChild(rotten_tomatoes);
    node.appendChild(imdb_span);
    node.appendChild(metascore_span)
    node.appendChild(rotten_tomatoes_span)
}