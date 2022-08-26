import {
  GIST_FAIL,
  GIST_LOADING,
  GIST_SUCCESS,
  GistDispatchTypes,
  GistType,
} from "../actions/gistActionTypes";

interface DefaultStateI {
  loading: boolean,
  gist?: GistType
}

const defaultState: DefaultStateI = {
  loading: false
};

const gistReducer = (state: DefaultStateI = defaultState, action: GistDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case GIST_FAIL:
      return {
        loading: false,
      }
    case GIST_LOADING:
      return {
        loading: true,
      }
    case GIST_SUCCESS:
      return {
        loading: false,
        gist: action.payload
      }
    default:
      return state
  }
};


export default gistReducer