import { useCatImage } from '../hooks/useCatImage'

export function ACat() {
  const { imageUrl } = useCatImage({ fact: 'Cat' })
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen recuperada para el componente ACat con la primera palabra del fact`}
        />
      )}
    </>
  )
}
