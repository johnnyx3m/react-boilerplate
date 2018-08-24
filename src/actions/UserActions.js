import * as actions from './UserActionTypes'
import request from 'axios'

const api = "http://localhost:3030"

export const retrieveUsers = () => {
    return dispatch =>{
        request.get(api +"/mocks/userlist/index.json")
            .then(result =>{
                dispatch({
                    type: actions.RETRIEVE_USER_LIST,
                    data: result.data
                })
            })
    }
  }

export const getUser = (id) => {
    return dispatch =>{
        request.get(api +"/mocks/getUser/index.json?id="+id)
            .then(result =>{
                dispatch({
                    type: actions.GET_USER_DETAIL,
                    data: result.data
                })
            })
    }
  }

export const createUser = (data) => {
    return dispatch =>{
        request.post(api +"/mocks/userlist/index.json", data)
            .then(result =>{
                dispatch({
                    type: actions.CREATE_USER,
                    data: result.data
                })
            })
    }
  }
export const deleteUser = (id) => {
    return dispatch =>{
        request.get(api +"/mocks/userlist/index.json?id="+id)
            .then(result =>{
                dispatch({
                    type: actions.DELETE_USER,
                    data: result.data
                })
            })
    }
  }
export const updateCurrentUser = (data) => {
    return {
        type: actions.UPDATE_CURRENT_USER,
        data
    }
  }