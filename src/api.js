
const baseURL = 'https://painassasin.online/';

export async function getTracks() {
  const response = await fetch((baseURL + 'catalog/track/all/'))

  if (!response.ok) {
    throw new Error("не удалось загрузить плейлист, попробуйте позже")
  }

  const data = await response.json()
  return data
}

export async function getTracksPlaylist(params) {
    const response = await fetch(baseURL + `catalog/selection/${params}`)
  
    if (!response.ok) {
      throw new Error("не удалось загрузить плейлист, попробуйте позже")
    }
  
    const data = await response.json()
    return data
  }