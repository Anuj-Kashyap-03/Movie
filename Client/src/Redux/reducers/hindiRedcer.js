import {
    CLEAN_STATE,
    HINDI_MOVIES_REQUEST,
    HINDI_MOVIES_SUCCESS,
    HINDI_MOVIES_FAIL,
    CLEAR_ERRORS
} from '../constants/hindiConstant'


export const getHindiMovies = (state = {
    movies: [],
    sucess: false,
    loading: false,
    total: 0,
    sucess2: false,
    a: 0

}, action) => {
    switch (action.type) {
        case HINDI_MOVIES_REQUEST:
            // console.log(action.payload.page)
            return {
                ...state,
                loading: action.payload.page <= 1 ? true : false,
                sucess: false,
                sucess2: action.payload.page > 1 ? false : true

            }


        case CLEAN_STATE:
            return {
                movies: [],
                sucess: false,
                loading: false,
                total: 0,
                sucess2: false,
                a: 0
            }

        case HINDI_MOVIES_SUCCESS:
            const total_movies = state.movies.concat(action.payload.data)
            let a = document.getElementById("loading");
            if (a) {
                a.style.display = "none";
            }
            if (action.page === 1) {
                return {
                    loading: false,
                    movies: total_movies,
                    total: action.payload.total,
                    page: action.payload.page,
                    sucess: true,
                    sucess2: action.payload.page > 1 ? true : false,
                    a: state.a + 1
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    movies: total_movies,
                    total: action.payload.total,
                    page: action.payload.page,
                    sucess: true,
                    sucess2: action.payload.page > 1 ? true : false,
                    a: state.a + 1
                }
            }

        case HINDI_MOVIES_FAIL:
            let b = document.getElementById("loading");
            if (b) {
                b.style.display = "none";
            }
            // console.log(total_movies)
            return {
                ...state,
                loading: false,
                sucess: false,
                sucess2: false

            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
                sucess: false,
                sucess2: false


            }

        default:
            return {
                ...state
            }
    }
}