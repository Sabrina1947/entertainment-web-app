
const data = ".data.json/title";

const main = document.getElementById("main");
main.innerHTML = "cards";

fetch(data)

.then(response => response.json())
.then(title => main.innerHTML = getListOfTitre(title));

const getListOfTitre = (title) => {
    const titre = title.map((title)).filter(title)
    return `${titre}`;
  };

/*

    if (res.ok) {
    return res.data();
}
    else {
    return Promise.reject(res.status);
}

})
.then(res => console.log(res))
.catch(err => console.log(`Erreur : ${err}`));


*/
