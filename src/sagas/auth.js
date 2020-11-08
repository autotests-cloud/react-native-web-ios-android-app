import { take, call, put, fork, 
  // takeEvery
} from 'redux-saga/effects'

import { requestData } from './../api'
import { 
  POST_AUTH_REQUEST,
  POST_AUTH_SUCCESS,
  POST_AUTH_ERROR,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
} from "./../reducers/auth"

export function * postAuthFlow () {
  while (true) {
    const action = yield take(POST_AUTH_REQUEST)
    try {
      const payload = yield call(requestData, "/api/auth/register_login", "POST", null, action.payload)
      const { token } = payload
      if(action.payload.remember){
        localStorage.setItem("token", token)
      } else {
        sessionStorage.setItem("token", token)
      }
      yield put({ type: POST_AUTH_SUCCESS, payload })
    } catch (error) {
      yield put({ type: POST_AUTH_ERROR, error })
    }
  }
}

export function * getAuthFlow () {
  while (true) {
    yield take(GET_AUTH_REQUEST)
    try {
      if(sessionStorage.getItem("token") || localStorage.getItem("token")){
        const payload = yield call(requestData, "/api/auth/", "GET")
        yield put({ type: GET_AUTH_SUCCESS, payload })  
      } else {
        yield put({ type: GET_AUTH_ERROR })  
      }
    } catch (error) {
      yield put({ type: GET_AUTH_ERROR, error })
    }
  }
}

export default function * root () {
  yield fork(postAuthFlow)
  yield fork(getAuthFlow)
  // yield takeEvery(REFRESH_FEEDS, updaterFlow)
}
