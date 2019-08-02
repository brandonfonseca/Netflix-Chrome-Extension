var past_title = "";
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
    xmlHttp.open( "GET", "https://www.omdbapi.com/?apikey=c7f1bdfa&t="+title, false );
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
    var imdb_score = document.createTextNode(ratings["IMDB"].toString());
    var metascore = document.createTextNode(ratings["Metascore"].toString());
    var rotten_tomatoes = document.createTextNode(ratings["Rotten Tomatoes"].toString() + "%");
    var imdb_logo = createLogo("https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/IMDb_logo.svg/1280px-IMDb_logo.svg.png");
    var metascore_logo = createLogo("https://pbs.twimg.com/profile_images/527528131171590144/EQXs3lpX_400x400.png");
    var rotten_tomatoes_logo = createLogo("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png");

    imdb_span.appendChild(imdb_score);
    metascore_span.appendChild(metascore);
    rotten_tomatoes_span.appendChild(rotten_tomatoes);

    if (ratings["IMDB"].toString() !== "N/A"){
        node.appendChild(imdb_logo);
        node.appendChild(imdb_span);
    }

    if (ratings["Metascore"].toString() !== "N/A"){
        node.appendChild(metascore_logo);
        node.appendChild(metascore_span);
    }
    if (ratings["Rotten Tomatoes"].toString() !== "N/A") {
        node.appendChild(rotten_tomatoes_logo);
        node.appendChild(rotten_tomatoes_span);
    }
}

function createLogo(logo_url){
    var logo = document.createElement("IMG");
    logo.setAttribute("width", "20");
    logo.setAttribute("height", "20");
    logo.setAttribute("src", logo_url);
    logo.setAttribute("hspace", "2");
    return logo;
}