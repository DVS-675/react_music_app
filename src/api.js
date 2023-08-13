const baseURL = "https://painassasin.online/"

export async function getTracks() {
  const response = await fetch(baseURL + "catalog/track/all/")

  if (!response.ok) {
    throw new Error("не удалось загрузить плейлист, попробуйте позже")
  }

  const data = await response.json()
  return data
}

// получение избранных треков
export async function getFavoritesTracks(accessToken) {
  const response = await fetch(baseURL + "catalog/track/favorite/all/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()
  return data
}

// Удалить трек в избранное
export async function deleteTrackInFavorites(accessToken, trackId) {
  const response = await fetch(`${path}/catalog/track/${trackId}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()
  return data
}

// Добавить трек в избранное
export async function addTrackInFavorites(accessToken, trackId) {
  const response = await fetch(`${path}/catalog/track/${trackId}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()
  return data
}

// Обновить access токен
export async function getAccessToken(refreshToken) {
  const response = await fetch(baseURL + "user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      refresh: refreshToken,
    }),
    headers: {
      "content-type": "application/json",
    },
  })

  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()
  return data
}

// Запрос токенов
export async function getToken(login, password) {
  const response = await fetch(baseURL + "/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email: login,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()
  return data
}

export async function login({ email, password }) {
  const response = await fetch(baseURL + "user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })

  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()

  return data
}

export async function registration({ email, password }) {
  console.log(email)
  console.log(password)

  const response = await fetch(baseURL + "user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),

    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
  if (!response.ok && !response.status === "400") {
    throw new Error("Ошибка сервера")
  }

  const data = await response.json()
  console.log(data)
  return data
}
