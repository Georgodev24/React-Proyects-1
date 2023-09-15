import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { ACat } from './Components/ACat'

export function App() {
  const { fact, getNewCatFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    getNewCatFact()
  }

  console.log(imageUrl)
  return (
    <>
      <main>
        <h1>App de gatitos</h1>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Imagen recuperada a partir de la primera palabra del ${fact}`}
          />
        )}
        <ACat />
      </main>
    </>
  )
}
