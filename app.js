//initialising DOM objects...
filmNameElement = document.querySelector('.film-name');
filmYearElement = document.querySelector('.film-year');
filmDescElement = document.querySelector('.film-desc');
filmImageElement = document.querySelector('.film-image');
filmBackgroundImageElement = document.querySelector('.back');
//Initialsing object...

let filmData = {};
let apiUrl = 'https://yts.lt/api/v2/movie_details.json?movie_id=';

//reading GET data...
let urlString = window.location.href;
let url = new URL(urlString);
let movieId= url.searchParams.get("movie_id");

//Fetching data from the yts api

fetch(apiUrl+movieId)
                .then((response)=>{
                    let movieData = response.json();
                   
                    return movieData;
                }).then((data)=>{
                    //writing data into the filmData object
                    filmData.movieName = data.data.movie.title;
                    filmData.movieYear = data.data.movie.year;
                    filmData.movieDesc = data.data.movie.description_full;
                    filmData.movieImage= data.data.movie.medium_cover_image;
                    filmData.movieBack =data.data.movie.background_image;

                }).then(()=>{
                    showMovieData();
                });

//injecting data into the index.html file...
function showMovieData(){
    filmNameElement.innerHTML= `<h1>${filmData.movieName}</h1>`;
    filmYearElement.innerHTML= `<h2>${filmData.movieYear}</h2>`;
    filmDescElement.innerHTML= `<p>${filmData.movieDesc}</p>`;
    filmImageElement.src     =  `${filmData.movieImage}`;
    filmBackgroundImageElement.style = `
        background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 1.00)), url('${filmData.movieBack}');
        background-repeat: no-repeat;
       `;

}

                







