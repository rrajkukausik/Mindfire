export const fetchMovies = (endpoint, returnFunc = result => result) => {
    return fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        return returnFunc(result);
      })
  }