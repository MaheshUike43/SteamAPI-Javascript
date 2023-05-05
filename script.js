
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6a5d8d873amshad3867395a336c1p12ed80jsnfe8b196556d6',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
    }
};

URL = `https://steam2.p.rapidapi.com/search/Asphalt/page/1`
fetch(URL, options)
    .then(response => response.json())
    .then(response => createCards(response));

function fetchApi(e) {
    const inputValue = document.querySelector("input")
    console.log(inputValue.value)
    if (inputValue.value.length == 0) {
        URL = `https://steam2.p.rapidapi.com/search/Asphalt/page/1`
    } else {
        URL = `https://steam2.p.rapidapi.com/search/${inputValue.value}/page/1`
    }

    fetch(URL, options)
        .then(response => response.json())
        .then(response => createCards(response));
}


function createCards(data) {
    list.innerHTML = ""
    data.forEach(element => {
        let image = element.imgUrl;
        let title = element.title;
        let relDate = element.released;
        let price = element.price;
        let review = element.reviewSummary;
        let buyUrl = element.url;
        list.insertAdjacentHTML("beforeend",
            `<div class="card" movietitle="${title}">
        <img src="${image}" alt="" class="card-img-top">
        <div class="my-3">
            <h4 class="card-title">${title}</h4>
            <p class="card-text rel-date">
                Release on <b>${relDate}</b> 
            </p>
            <p class="card-text price">
                Price: <b>${price}</b> 
            </p>
            <p class="card-text review">
                Review: ${review}
            </p>
            <a href="${buyUrl}" class="btn btn-outline-light buyNow">Buy Now</a>
        </div>
    </div>`);

    });
}


const list = document.querySelector(".createCard")
