import {
    REQUEST_LATEST_MOVIES,
    SUCCESS_LATEST_MOVIES,
    FAIL_LATEST_MOVIES
} from "../constants/HomeConstants";


export const Latest_movies = (state = {
    movies: null,
    sucess: false,
    loading: true,
    total: 0,
    sucess2: false

}, action) => {
    switch (action.type) {
        case REQUEST_LATEST_MOVIES:
        return {
            ...state,
            loading:true
        }
            
        case SUCCESS_LATEST_MOVIES:
            return {
                ...state,
                loading:false,
                movies:action.payload.data,
                sucess:true
            }
        

        case FAIL_LATEST_MOVIES:
            return {
                ...state,
                sucess:false,
                loading:false
            }
        
        
            
    
        default:
            return{
                ...state
            }
    }

}