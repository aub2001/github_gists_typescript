import {Dispatch} from "redux";
import {GIST_FAIL, GIST_LOADING, GIST_SUCCESS, GistDispatchTypes} from "./gistActionTypes";
import axios from "axios";

export const fetchGists = (searchText: string) => async (dispatch: Dispatch<GistDispatchTypes>) => {
  try {
    
    dispatch({
      type: GIST_LOADING
    })

    console.log("text",`https://api.github.com/gists/${searchText}`)
    
    const res = searchText? await axios.get(`https://api.github.com/gists/${searchText}`) : await axios.get(`https://api.github.com/gists`);
    console.log(res)

    dispatch({
      type: GIST_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: GIST_FAIL
    })
  }
};