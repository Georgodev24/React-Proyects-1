import './App.css'

import { useMovie } from './hooks/useMovie'
import { RenderMovies } from './Components/Movies'
import { useState, useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('Ingresa mas de 3 caracteres')
      return
    }

    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovie({ search, sort })

  const debounceMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas con React</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='The Revenant, The Dark Knight, '
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button className='button' type='submit'>
            Buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <RenderMovies movies={movies} />}
      </main>
    </div>
  )
}

export default App
