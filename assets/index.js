                              //cards


// import {trends} from "main.js";

const cards = document.getElementById("cards");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => {
      let bookmarked;
      let contenuHtml = `<div class="card">`;
      if (window.innerWidth >= 1240) {// ici on test la taille de la fenetre elle est superieur ou égale à 1240px.
        if(localStorage.getItem(data.title) == "true"){
          bookmarked = "./assets/icon-bookmark-full.svg";
        }else{
          bookmarked = "./assets/icon-bookmark-empty.svg";
        }
        contenuHtml +=
         `<img class = "picture" src= "${data.thumbnail.regular.large}"/>
          <div onclick="addFavorites(this,'${data.title}')" class = "bookmark-circle">
          <img class = "bookmark" src ="${bookmarked}"/>
          </div>`;
      } else if (window.innerWidth >= 769) {// ici on test la taille de la fenetre elle est superieur ou égale à 769px.
        contenuHtml +=
         `<img class = "picture" src= "${data.thumbnail.regular.medium}"/>
          <div class = "bookmark-circle">
          <img class = "bookmark" src ="${bookmarked}"/>
          
          </div>`;
      } else {// ici on test la taille de la fenetre c'est l'element par defaut car on change la taille de la photo en fonction de l'element par defaut qui est le smartphone.
        contenuHtml +=
          `<img class = "picture" src= "${data.thumbnail.regular.small}">
           <div class = "bookmark-circle">
            <img class = "bookmark" src ="${bookmarked}"/>
      </div></img>`;
      }
    //   if(data.isBookmarked == true) {
    //     console.log(data.isBookmarked);
    //     contenuHtml += 
    //     `<img class= "bookmark bkf" src= "./assets/icon-bookmark-full.svg"/>`
    // } else {
    //   contenuHtml += 
    //     `<img class= "bookmark bkf" src= "./assets/icon-bookmark-empty.svg"/>`
    // }   
      contenuHtml +=
        `<div class='info'><p class='date'> ${data.year} </p>`;
      contenuHtml +=
        `<p> &#x2022 </p>`;
      contenuHtml +=
        `<p class=" ${data.category} ">${data.category}</p>`// ici on a mis en class les categorie soit serie tv soit film on la paramettré dans le css
      contenuHtml +=
      `<p> &#x2022 </p>`;
      contenuHtml += 
      `<p class="public"> ${data.rating}</p></div>`;
      contenuHtml +=
       `<h4 class="title"> ${data.title} </h4>`;

      contenuHtml += `</div>`;
      cards.innerHTML += contenuHtml;
    });
  });

                            // fin des cards

                              //search bar

const movieCardTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-cards-container]")
const searchInput = document.querySelector("[data-search]")

//"on click" on search input we make our other sections dissapear
function hideCards(){
    //console.log("Bonsoir");
    document.getElementById("hide-cards").style.display = "none";
    document.getElementById("trend2").style.display = "none";
}

searchInput.addEventListener("input", e => { 
  const value = e.target.value.toLowerCase()
    movieCardContainer.innerHTML = "";
    document.getElementById("hide-cards").style.display = "none";
    document.getElementById("trend2").style.display = "none";
    if (value != "" && value.length >= 3){   
      fetch("data.json")
      .then(res => res.json())
      .then(data => {
        let movies = data.map(movie => {
          const isVisible = movie.title.toLowerCase().includes(value)
          const card = movieCardTemplate.content.cloneNode(true).children[0]    
          // console.log(card);
          const image = card.querySelector("[data-image]")
          const title = card.querySelector("[data-title]")
          const year = card.querySelector("[data-year]")
          const icon = card.querySelector("[data-icon]")
          const category = card.querySelector("[data-category")
          const rating = card.querySelector("[data-rating]")
          image.src = movie.thumbnail.regular.large
          title.textContent = movie.title
          year.textContent = movie.year
          if(movie.category == "Movie") {
            icon.src = "assets/icon-category-movie.svg"
          } else {
            icon.src = "assets/icon-category-tv.svg"
          }
          category.textContent = movie.category
          rating.textContent = movie.rating
          movieCardContainer.append(card)
            if(!isVisible){
              card.classList.add("hide")
            }
            return { title:movie.title, year:movie.year, category:movie.category, element:card }
            }) 
})  
    }else if(value != "" && value.length < 3){//when we still have something in the input but less than 3 letters, we still don't want to show our sections below
      document.getElementById("hide-cards").style.display = "none";
      document.getElementById("trend2").style.display = "none";
    }else{
      document.getElementById("hide-cards").style.display = "block";
      document.getElementById("trend2").style.display = "block";
    }// here we make appear our sections again, when searchbar's input is empty
           
}) 



                      // fin de la search bar

                      //trending

const mainContainer = document.getElementById("trends");

fetch("../data.json")
.then((response) => response.json())
.then((data) => {
  // Display my data in a loop
  //console.log(data);
  //console.log(data.title);
  for (movie of data) {
    if (movie.isTrending === true) {
      // console.log(movie.thumbnail.regular.small)
      const globalCards = document.createElement("div");
      const card = document.createElement("div");
      const cardImage = document.createElement("img");
      // const cardUpper = document.createElement("div");
      const tBookmarkBg = document.createElement("div");
      const tBookmark = document.createElement("img");

      const cardBody = document.createElement("div");
      const categoryIcon = document.createElement("img");
      const tTitle = document.createElement("h5");
      const tYear = document.createElement("p");
      const tCategory = document.createElement("p");
      const tRating = document.createElement("p");
      const smallDot = document.createElement("div");
      const smallDot2 = document.createElement("div");

      globalCards.classList.add("flex");
      globalCards.classList.add("global-cards");
      card.classList.add("trend");
      cardImage.classList.add("trend-img");
      card.classList.add("m-16");
      // cardUpper.classList.add("trend-book");
      tBookmarkBg.classList.add("bookmark-circle");
      tBookmark.classList.add("bookmark"); //to look at further
      
      cardBody.classList.add("trend-info");
      cardBody.classList.add("flex");
      cardBody.classList.add("flex-wrap");
      tYear.classList.add("trend-details");
      tCategory.classList.add("trend-details");
      tRating.classList.add("trend-details"); 
      tTitle.classList.add("t-title");
      smallDot.classList.add("t-dot");
      smallDot2.classList.add("t-dot");

      if (window.innerWidth >= 375) {
        cardImage.src = movie.thumbnail.trending.large;
      } else {
        cardImage.src = movie.thumbnail.trending.small;
      }

      if(movie.category == "Movie") {
          categoryIcon.src = "assets/icon-category-movie.svg"
      } else {
          categoryIcon.src = "assets/icon-category-tv.svg"
      }

      if(movie.isBookmarked == true) {
        tBookmark.src = "assets/icon-bookmark-full.svg"
    } else {
        tBookmark.src = "assets/icon-bookmark-empty.svg"
    }
    
      //cardImage.src = movie.thumbnail.regular.small;
      tTitle.innerText = movie.title;
      tYear.innerText = movie.year;
      tRating.innerText = movie.rating;
      tCategory.innerText = movie.category;
      smallDot.innerHTML = "&#x2022";
      smallDot2.innerHTML = "&#x2022";

      card.appendChild(cardImage);
      //tBookmarkBg.onclick="addFavorites(tBookmarkBg,movie.title)";
      card.appendChild(tBookmarkBg);
      tBookmarkBg.appendChild(tBookmark);
      cardBody.appendChild(tYear);
      cardBody.appendChild(smallDot);
      cardBody.appendChild(categoryIcon);
      cardBody.appendChild(tCategory);
      cardBody.appendChild(smallDot2);
      cardBody.appendChild(tRating);
      cardBody.appendChild(tTitle);


      // document.querySelector('.bookmark-circle').addEventListener('click', e => {
      //   //faut récupérer le titre de la carte clické 
      // })
      console.log(tBookmarkBg);
      

      // card.appendChild(cardUpper);
      card.appendChild(cardBody);

      globalCards.appendChild(card);

      trends.appendChild(globalCards);
    }
  }
});



                      // fin de trending

                      //Bookmarked

function addFavorites(e,titreFilm) {
  //cette fonction on l'appelle lorsqu'on clique sur l'icone et la zone autour 
  //fonction appelée dans la div class = "card-icon"
  let imgsrc = e.querySelector(".bookmark").src; //on récupère la source de l'icone de l'élément sélectionné (e), qui est notre card-icon

    if(imgsrc.includes("icon-bookmark-empty.svg")){
        // si notre source d'image (src)contient "icon-bookmark-empty.svg" càd icone vide
      e.querySelector(".bookmark").src="./assets/icon-bookmark-full.svg"; //on remplace l'icone vide par une icone rempli "full"
      localStorage.setItem(titreFilm,"true");//le isbookmarked dans le local storage reprend la valeur true //à la base c'etait false vu que l'icone etait vide

    }else{
      // l'icone devient "empty" et le isbookmarked dans localstorage devient false
      e.querySelector(".bookmark").src="./assets/icon-bookmark-empty.svg";
      localStorage.setItem(titreFilm,"false");

    }
}
