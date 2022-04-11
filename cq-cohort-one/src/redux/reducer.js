import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./actionTypes";

export const initState = {
  userData: [],
  isError: false,
  isLoading: false,
  isAuth: false
}

const reducer = (state = initState, { type, payload }) => {
  switch(type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: payload
      }
    default:
      return state
  }
}

export default reducer;