export const fetchFact = async (fact) => {
  const firstWord = fact.split(' ')[0]

  const res = await fetch(
    `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
  )
  if (res.ok) {
    const response = await res.json()
    console.log(response)
    const { url } = response
    return url
  }
}
