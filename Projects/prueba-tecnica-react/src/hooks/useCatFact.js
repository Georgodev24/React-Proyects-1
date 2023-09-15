import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const getNewCatFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  useEffect(getNewCatFact, [])

  return { fact, getNewCatFact }
}
