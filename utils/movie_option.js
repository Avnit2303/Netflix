
const movie_option = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_AUTH_KEY // ✅ Correct
  }
}

export default movie_option;