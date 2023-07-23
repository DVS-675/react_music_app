export async function getTracks() {
  const response = await fetch("https://painassasin.online/catalog/track/all/")

  if (!response.ok) {
    throw new Error("не удалось загрузить плейлист, попробуйте позже")
  }

  const data = await response.json()
  return data
}
