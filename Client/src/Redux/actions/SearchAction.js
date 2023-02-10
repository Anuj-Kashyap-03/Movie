import { searchConstants } from "../constants/searchConstants";
import axios from 'axios'




export const Search_movies = (search) => async (dispatch) => {
    try {
        if ((search.trim() === '')) {
            dispatch({
                type: searchConstants.CLEANFIELD,
                for: search
            })
        }
        else {
            dispatch({
                type: searchConstants.SEARCHING,
                for: search
            })
            let url = `/api/search?search=${search}`
            let data = await axios.get(url)
            dispatch({
                type: searchConstants.SEARCHING_SUCCESS,
                data: data.data.data,
                search:data.data.search 
            })
        }

    } catch (error) {
        dispatch({ type: searchConstants.SEARCHING_FAIL })

    }
}