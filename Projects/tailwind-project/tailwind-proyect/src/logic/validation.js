export const validEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validation = (email) => {
  if (!email) {
    setError('Please enter your email.')
  } else if (!validEmail(email)) {
    setError('Please enter a valid email.')
  } else {
    setError('')
  }
}
