import {
    CLEAN_MOVIE_DETAILS,
    REQUEST_MOVIE_DETAILS,
    SUCCESS_MOVIE_DETAILS
    , FAIL_MOVIE_DETAILS
} from "../constants/Moviedetails";



export const Set_movie_model = (state = {
    id: null,
    loading: true,
    success: false,
    data: []
}, action) => {
    switch (action.type) {
        case CLEAN_MOVIE_DETAILS:
            return null
        case REQUEST_MOVIE_DETAILS:
            return {
                ...state,
                loading: true,
                success: false,
                id: action.id
            }
        case SUCCESS_MOVIE_DETAILS:
            const data = action.data
            data.image = data.image.replace(",t_web_hs_", ",t_web_m_");
            return {
                ...state,
                data: data,
                loading: false,
                success: true
            }
        case FAIL_MOVIE_DETAILS:
            return {
                ...state,
                loading: false,
                success: false
            }

        default:
            return {
                ...state
            }
    }
}