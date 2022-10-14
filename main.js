

fetch("data.json",
{ method: 'GET' })

.then(response => response.json())
.then(data => {
    console.log(data.title)
    */document.getElementById("title");*/

    if (res.ok) {
    return res.data();
}
    else {
    return Promise.reject(res.status);
}

})
.then(res => console.log(res))
.catch(err => console.log(`Erreur : ${err}`));
