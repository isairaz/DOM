let movies

fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
    .then((response) => {
    // console.log(response)
    return response.json();
})
    .then(data => {
        
        movies = data
        
        // Title
        // Year
        // Rated
        // Released
        // Runtime
        // Poster
        // Genre
        // Images
        // Plot

        movies.forEach(movie => {
        document.body.insertAdjacentHTML("beforeend" ,`<div class="card-container">

                    <figure class="movie">
                        <div class="movie__hero">
                        <img src=${movie.Images[0]} alt="Rambo" class="movie__img">
                        </div>
                        <div class="movie__content">
                        <div class="movie__title">
                            <h1 class="heading__primary">${movie.Title} <i class="fas fa-fire"></i></h1>
                            <div class="movie__tag movie__tag--1">${movie.Genre}</div>
                            
                        </div>
                        <p class="movie__description">
                            ${movie.Plot}
                        </p>
                        <div class="movie__details">
                            <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i> </span>${movie.Writer}</p>
                            <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>${movie.Runtime}</p>
                            <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
                            </span>${movie.Released}</p>
                        </div>
                        </div>
                        <div class="movie__price">${movie.Country}</div>
                    </figure>

                </div>`
            )});
        
        
    })



