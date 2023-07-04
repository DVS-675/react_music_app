const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = `0${timeInSeconds % 60}`.slice(-2)
  return `${minutes}:${seconds}`
}

export default formatTime

