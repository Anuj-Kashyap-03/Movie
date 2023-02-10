import { configureStore } from '@reduxjs/toolkit'
import { getHindiMovies } from './reducers/hindiRedcer'
import { getEnglishMovies } from './reducers/englishReducer'
import { Latest_movies } from './reducers/HomeReducers'
import { SearchedMovies } from './reducers/searchReducer'
import { Set_movie_model } from './reducers/Moviedetails'






export default configureStore({
  reducer: {
    Latest:Latest_movies,
    Hindi:getHindiMovies,
    English:getEnglishMovies,
    Search:SearchedMovies,
    Model_Movie:Set_movie_model
  }

})