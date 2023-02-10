import {
    CLEAN_MOVIE_DETAILS,
    REQUEST_MOVIE_DETAILS,
    SUCCESS_MOVIE_DETAILS
    , FAIL_MOVIE_DETAILS
} from "../constants/Moviedetails";
import axios from 'axios'



export const GET_movie_details_by_id = (id) => async (dispatch) => {
    try {
        dispatch({
            type:CLEAN_MOVIE_DETAILS
        })
        dispatch({
            type: REQUEST_MOVIE_DETAILS,
            id: id,
        })

        let url = `/api/movie/${id}`
        let data = await axios.get(url)
        if (!data.data.data) {
            dispatch({
                type: FAIL_MOVIE_DETAILS,
            })
        }
        else {
            dispatch({
                type: SUCCESS_MOVIE_DETAILS,
                id: id,
                data: data.data.data
            })
        }

    } catch (error) {
        dispatch({
            type: FAIL_MOVIE_DETAILS,
        })
    }

}
