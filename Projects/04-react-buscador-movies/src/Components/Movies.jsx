function MoviesResponse({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResponse() {
  return <p>No se encontraron Peliculas</p>
}

export function RenderMovies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <MoviesResponse movies={movies} /> : <NoMoviesResponse />
}
