//search bar

const movieCardTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-cards-container]")
const searchInput = document.querySelector("[data-search]")

//"on click" on search input we make our other sections dissapear
function hideCards(){
    document.getElementById("hide-cards").style.display = "none";
    document.getElementById("trending").style.display = "none";
}

searchInput.addEventListener("input", e => { 
  const value = e.target.value.toLowerCase()
    movieCardContainer.innerHTML = "";
    document.getElementById("hide-cards").style.display = "none";
    document.getElementById("trending").style.display = "none";
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
          const category = card.querySelector("[data-category")
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
            }) 
})  
    }else if(value != "" && value.length < 3){//when we still have something in the input but less than 3 letters, we still don't want to show our sections below
      document.getElementById("hide-cards").style.display = "none";
      document.getElementById("trending").style.display = "none";
    }else{
      document.getElementById("hide-cards").style.display = "block";
      document.getElementById("trending").style.display = "block";
    }// here we make appear our sections again, when searchbar's input is empty
           
}) 