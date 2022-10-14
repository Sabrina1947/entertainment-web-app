const mainContainer = document.getElementById("trends");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Display my data in a loop
    console.log(data);
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
        globalCards.classList.add("card-space");
        globalCards.classList.add("scroll");
        card.classList.add("trend");
        cardImage.classList.add("trend-img");
        card.classList.add("m-16");
        // cardUpper.classList.add("trend-book");
        tBookmarkBg.classList.add("bookmark-circle");
        tBookmark.classList.add("bookmark-empty"); //to look at further

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

        tBookmark.src = "assets/icon-bookmark-empty.svg";
        //cardImage.src = movie.thumbnail.regular.small;
        tTitle.innerText = movie.title;
        tYear.innerText = movie.year;
        tRating.innerText = movie.rating;
        tCategory.innerText = movie.category;
        smallDot.innerHTML = "&#x2022";
        smallDot2.innerHTML = "&#x2022";

        card.appendChild(cardImage);
        card.appendChild(tBookmarkBg);
        card.appendChild(tBookmark);
        cardBody.appendChild(tYear);
        cardBody.appendChild(smallDot);
        cardBody.appendChild(categoryIcon);
        cardBody.appendChild(tCategory);
        cardBody.appendChild(smallDot2);
        cardBody.appendChild(tRating);
        cardBody.appendChild(tTitle);

        // card.appendChild(cardUpper);
        card.appendChild(cardBody);

        globalCards.appendChild(card);

        trends.appendChild(globalCards);
      }
    }
  });
