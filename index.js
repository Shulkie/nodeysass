
//https://www.omdbapi.com/?apikey=2fb7569a&t=





    
  
  // obtener el input de busqueda
  // document.getElementById
  // document.querySelector
  const input = document.querySelector('#search'); 
  
  // obtengo todos los elementos que necesito modificar
  const title = document.querySelector('.movie-info .title');
  const rated = document.querySelector('#rated');
  const year = document.querySelector('#year');
  const genre = document.querySelector('#genre');
  const description = document.querySelector('.movie-info .description');
  const writtenBy = document.querySelector('.movie-info .written-by span');
  const directedBy = document.querySelector('.movie-info .directed-by span');
  const starring = document.querySelector('.movie-info .starring span');
  const image = document.querySelector('#movie img');

  // keyup
  // keydown
  input.addEventListener('keypress', function (event) {
    // pregunto si la persona presionó la tecla enter
    if (event.keyCode === 13) {

      // guardo el valor que la persona ingreso en el input
      const movieName = input.value.toLowerCase();
      fetch ('https://www.omdbapi.com/?apikey=2fb7569a&t='+ movieName)
.then (res => res.json())
.then (movie =>{
console.log(movie);

title.innerText = movie.Title;
        title.innerHTML = movie.Title
        rated.innerText = movie.Rated;
        year.innerText = movie.Year;
        genre.innerText = movie.Genre;
        description.innerText = movie.Plot;
        writtenBy.innerText = movie.Writer;
        directedBy.innerText = movie.Director;
        starring.innerText = movie.Actors;
  
        image.src = movie.Poster;
})
  

    }})
      // filtro las peliculas que tengan el titulo igual a lo que tipeamos en el input

   
      //const moviesFiltered = movies.filter(movie => movie.Title === movieName);
      //console.log( moviesFiltered );
  
      // si tengo al menos una peli filtrada
    //   if (moviesFiltered.length > 0) {
    //     // me quedo con la primer pelicula que encontramos
    //     const movie = moviesFiltered[0];
  
//         title.innerText = movie.Title;
//         // title.innerHTML = movie.Title;
  
//         rated.innerText = movie.Rated;
//         year.innerText = movie.Year;
//         genre.innerText = movie.Genre;
//         description.innerText = movie.Plot;
//         writtenBy.innerText = movie.Writer;
//         directedBy.innerText = movie.Director;
//         starring.innerText = movie.Actors;
  
//         image.src = movie.Poster;
//       }
//     }
//   });