console.log("ok");

const cards = document.getElementById("cards");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (movie of data){

        if(movie.category === "Movie") {
        console.log(movie.title);
            let contenuHtml = "<div class='card'>";
            if (window.innerWidth >= 1240) {// ici on test la taille de la fenetre elle est superieur ou égale à 1240px 
                contenuHtml +=
                "<img class='picture' src='" + movie.thumbnail.regular.large + "'><div class='bookmark-circle'>" + "<img class='bookmark-empty'src='./assets/icon-bookmark-empty.svg'>" + "</img>" + "</div>" + "</img>";
            } else if (window.innerWidth >= 769) {// ici on test la taille de la fenetre elle est superieur ou égale à 769px 
                contenuHtml +=
                "<img class='picture' src='" + movie.thumbnail.regular.medium + "'/><div class='bookmarked'></div></img>";
            } else {// ici on test la taille de la fenetre c'est l'element par defaut car on change la taille de la photo en fonction de l'element par defaut qui est le smartphone 
                contenuHtml +=
                "<img class='picture' src='" + movie.thumbnail.regular.small + "'/>";
            }
            contenuHtml +=
                "<div class='info'><p class='date'>" + movie.year + "</p>";
            contenuHtml +=
                "<p>" + "&#x2022" + "</p>";
            contenuHtml +=
                "<p class='" + movie.category + "'>" + movie.category + " . " + "</p>"// ici on a mis en class les categorie soit serie tv soit film on la paramettré dans le css
            contenuHtml +=
                "<p>" + "&#x2022" + "</p>";
            contenuHtml += "<p class='public'>" + movie.rating + "</p></div>";
            contenuHtml += "<h4 class='title'>" + movie.title + "</h4>";
        
            contenuHtml += "</div>";
            cards.innerHTML += contenuHtml;
    }
  }});

        // console.log(plop.category);