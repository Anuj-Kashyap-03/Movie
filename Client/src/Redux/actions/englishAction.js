import {
    ENGLISH_MOVIES_REQUEST,
    ENGLISH_MOVIES_SUCCESS,
    ENGLISH_MOVIES_FAIL,
    CLEAN_STATE
} from '../constants/englishConstant'
import axios from 'axios'



export const getEnglishMovies = (page) => async (dispatch) => {

    try {
        // console.log("data")
        if (page <=1 || !page) {
            // console.log("a")
            dispatch({ type: CLEAN_STATE })
        }

        dispatch({
            type: ENGLISH_MOVIES_REQUEST,
            payload: {
                page: page
            }
        })
        let link = `/api/movies/english?page=${page}`
        // console.log(link)

        const data = await axios.get(link)
        // console.log(data)
        dispatch({
            type: ENGLISH_MOVIES_SUCCESS,
            payload: {
                page: page,
                data: data.data.data,
                total: data.data.total
            }
        })


    } catch (error) {
        dispatch({ type: ENGLISH_MOVIES_FAIL })
        // console.log(error)
    }
}