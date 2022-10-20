console.log("ok");

const cards = document.getElementById("cards");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (movie of data){
        if(movie.category === "Movie") {
        //console.log(movie.title);
            let contenuHtml = "<div class='card'>";
            if (window.innerWidth >= 1240) {// ici on test la taille de la fenetre elle est superieur ou égale à 1240px.
                contenuHtml +=
                 `<img class = "picture" src= "${movie.thumbnail.regular.large}"/>
                  <div class = "bookmark-circle">
                  </div>`;
              } else if (window.innerWidth >= 769) {// ici on test la taille de la fenetre elle est superieur ou égale à 769px.
                contenuHtml +=
                 `<img class = "picture" src= "${movie.thumbnail.regular.medium}"/>
                  <div class = "bookmark-circle"> 
                  </div>`;
              } else {// ici on test la taille de la fenetre c'est l'element par defaut car on change la taille de la photo en fonction de l'element par defaut qui est le smartphone.
                contenuHtml +=
                  `<img class = "picture" src= "${movie.thumbnail.regular.small}">
                   <div class = "bookmark-circle">
              </div></img>`;
              }
              if(movie.isBookmarked == true) {
                console.log(movie.isBookmarked);
                contenuHtml += 
                `<img class= "bookmark bkf" src= "./assets/icon-bookmark-full.svg"/>`
            } else {
              contenuHtml += 
                `<img class= "bookmark bkf" src= "./assets/icon-bookmark-empty.svg"/>`
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

//search bar------> search in movies only

const movieCardTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-cards-container]")
const searchInput = document.querySelector("[data-search]")

//"on click" on search input we make our other sections dissapear
function hideCards(){
    document.getElementById("hide-cards").style.display = "none";
}

searchInput.addEventListener("input", e => { 
  const value = e.target.value.toLowerCase()
  movieCardContainer.innerHTML = "";
  document.getElementById("hide-cards").style.display = "none";
    if (value != "" && value.length >= 3){   
      fetch("data.json")
      .then(res => res.json())
      .then(data => {
        let movies = data.map(movie => {
          if (movie.category === "Movie") {  
          const isVisible = movie.title.toLowerCase().includes(value)
          const card = movieCardTemplate.content.cloneNode(true).children[0]    
          // console.log(card);
          const title = card.querySelector("[data-title]")
          const year = card.querySelector("[data-year]")
          const category = card.querySelector("[data-category")
          const image = card.querySelector("[data-image]")
          const rating = card.querySelector("[data-rating]")
          image.src = movie.thumbnail.regular.small
          title.textContent = movie.title
          year.textContent = movie.year
          category.textContent = movie.category
          rating.textContent = movie.rating
          movieCardContainer.append(card)
          if(!isVisible){
              card.classList.add("hide")
            }
            return { title:movie.title, year:movie.year, category:movie.category, element:card }
        }
         
        }) 
            
        })  
    }else if(value != "" && value.length < 3){//when we still have something in the input but less than 3 letters, we still don't want to show our sections below
    document.getElementById("hide-cards").style.display = "none";
    
    }else{
    document.getElementById("hide-cards").style.display = "block";
    }// here we make appear our sections again, when searchbar's input is empty
           
}) 

        // console.log(plop.category);