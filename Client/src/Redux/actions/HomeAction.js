import {
    REQUEST_LATEST_MOVIES,
    SUCCESS_LATEST_MOVIES,
    FAIL_LATEST_MOVIES
} from "../constants/HomeConstants";
import axios from 'axios'



export const getLatestMovies = () => async (dispatch) => {
    try {
        dispatch({
            type:REQUEST_LATEST_MOVIES
        })
        let link = `/api/home/latest`
        const data = await axios.get(link)
        // console.log(data)
        dispatch({
            type:SUCCESS_LATEST_MOVIES,
            payload:data.data
        })


    } catch (error) {
        dispatch({type:FAIL_LATEST_MOVIES})
        // console.log(error)

    }
}


