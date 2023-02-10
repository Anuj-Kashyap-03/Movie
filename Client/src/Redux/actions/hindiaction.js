import {
    CLEAN_STATE,
    HINDI_MOVIES_REQUEST,
    HINDI_MOVIES_SUCCESS,
    HINDI_MOVIES_FAIL
} from '../constants/hindiConstant'
import axios from 'axios'

export const getHindiMovies = (page) => async (dispatch) => {
    try {
        // console.log("data")
        if (page <=1 || !page) {
            // console.log("a")
            dispatch({ type: CLEAN_STATE })
        }

        dispatch({
            type: HINDI_MOVIES_REQUEST,
            payload: {
                page: page
            }
        })
        let link = `/api/movies/hindi?page=${page}`
        // console.log(link)

        const data = await axios.get(link)
        // console.log(data)
        dispatch({
            type: HINDI_MOVIES_SUCCESS,
            payload: {
                page: page,
                data: data.data.data,
                total: data.data.total
            }
        })


    } catch (error) {
        dispatch({ type: HINDI_MOVIES_FAIL })
        // console.log(error)
    }
}