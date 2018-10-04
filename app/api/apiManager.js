
const BASE_URL =  "https://api.themoviedb.org/3"
const TMDB_API_KEY = "41a535e776713a8fef2ae156258ab9e3"
/**
 * Fetch movies with a keyword
 */
  export function getMoviesFromApiAsync(keyword, componentName, selectedIndex) {
   var api_url = BASE_URL + '/search/movie' + '?api_key=' + TMDB_API_KEY + '&language=en-US&query=' + keyword
   return fetch(api_url, {
       method: 'GET',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
     })
     .then((response) => response.json())
     .then((responseJson) => {
       for (var i =0; i <  responseJson.results.length; i++) {
         (responseJson.results[i])['release_date'] = (responseJson.results[i])['release_date'].substring(0, 4)
       }

       var sixPlusRatedmovies =  {
         title:'Rated above 6.5',
         data:[]
       }
       var ratedBw5and6 =  {
         title:'Rated between 5 and 6',
         data:[]
       }
       var ratedBelow5 = {
         title:'Rated below 5',
         data:[]
       }
       var MoviesAfter2000 =  {
         title:'2000 - 2018',
         data:[]
       }
       var MoviesBetween80and20 =  {
         title:'1980 - 2000',
         data:[]
       }
       var Moviesbefore80 =  {
         title:'Before 1980',
         data:[]
       }

       var moviesByRating = [
         sixPlusRatedmovies, ratedBw5and6, ratedBelow5
       ];

       var moviesByYear = [
         MoviesAfter2000, MoviesBetween80and20, Moviesbefore80
       ];

       var movies = groupBy(responseJson.results, (c) => c.release_date);
       var arrayOfMovies = []

       // for rating

       if (selectedIndex == 0) {
         for (var i =0; i <  responseJson.results.length; i++) {
           var movie =  responseJson.results[i]
           if(movie["vote_average"] > 6.5) {
             sixPlusRatedmovies.data.push(movie)
           }
           else if (movie["vote_average"] > 5 && movie["vote_average"] < 6.5) {
             ratedBw5and6.data.push(movie)
           }
           else if (movie["vote_average"] < 5) {
             ratedBelow5.data.push(movie)
           }
         }
         componentName.setState({sections:moviesByRating})
       }
       else if (selectedIndex == 1) {
         // for year
         for (var i =0; i <  responseJson.results.length; i++) {
           var movie =  responseJson.results[i]
           if(movie["release_date"] > 2000) {
             MoviesAfter2000.data.push(movie)
           }
           else if (movie["release_date"] > 1980 && movie["vote_average"] < 2000) {
             MoviesBetween80and20.data.push(movie)
           }
           else if (movie["release_date"] < 1980) {
             Moviesbefore80.data.push(movie)
           }
         }
         componentName.setState({sections:moviesByYear})
       }

     })
     .catch((error) => {
       console.error(error);
     });
 }

 function groupBy(xs, f) {
   return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
 }
