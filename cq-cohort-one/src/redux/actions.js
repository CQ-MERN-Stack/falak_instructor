import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./actionTypes";
import axios from "axios";

export const getUsersRequest = ( payload ) => ({
  type: GET_USERS_REQUEST,
  payload
}) 

export const getUsersFailure = ( payload ) => ({
  type: GET_USERS_FAILURE,
  payload
})

export const getUsersSuccess = ( payload ) => ({
  type: GET_USERS_SUCCESS,
  payload
})

export const getUsers = ( payload ) => dispatch => {
  dispatch(getUsersRequest());
  return axios.get("https://api.github.com/search/users", payload)
    .then((res)=>{
      return dispatch(getUsersSuccess(res))
    })
    .catch((err)=>{
      return dispatch(getUsersFailure(err))
    })
}