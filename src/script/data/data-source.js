class DataSource {
    static searchMovie(keyword) {
        
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=bbba1b708f1f49e53ef069a36bf9e6f6&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.teams) {
                return Promise.resolve(responseJson.teams);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;