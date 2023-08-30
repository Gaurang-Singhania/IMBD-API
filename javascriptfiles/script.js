
const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df55a7703amsh0f287dfa5b60ce3p18c09fjsnab2e0d9131b9',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

async function f(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	
const events=result.map((element)=>{
	return element;
})
console.log(events);
ihtml='';
for (var item in events) {
	ihtml += `<div class="upcoming-img-box"><div class="images"><img src="${events[item].image}" alt="movie banner"></div><div class="details category-content"><p>Rank:${events[item].rank}</p><p>Id:${events[item].id} </p><p>Title:${events[item].title}</p><p>Description:${events[item].description} </p><p>Rating:${events[item].rating}</p><p>Genre:${events[item].genre} </p><p>Year:${events[item].year}</p></div></div>`;
}
cardContainer.innerHTML = ihtml;

} catch (error) {
	console.error(error);
}
}
f();

