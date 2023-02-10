import { searchConstants } from "../constants/searchConstants";


export const SearchedMovies = (state, action) => {
    switch (action.type) {
        case searchConstants.SEARCHING:
            return {
                ...state,
                loading: true,
                success: false,
                for: action.for
            }

        case searchConstants.SEARCHING_SUCCESS:

            const statecopy = { ...state }
            if (statecopy.for === action.search) {
                // console.log('yes')
                return {
                    ...state,
                    movies: action.data,
                    loading: false,
                    success: true,
                    resultfor: action.search
                }
            }else{
                // console.log('No')
                return {
                    ...state,
                    movies: [],
                    loading: false,
                    success: true,
                    resultfor: action.search
                }
            }


        case searchConstants.SEARCHING_FAIL:
            return {
                ...state,
                loading: false,
                success: false

            }
        case searchConstants.CLEANFIELD:
            return {
                ...state,
                for: action.for,
                movies: null,
                loading: false,
                success: true
            }
        default:
            return { ...state }
    }
} 