

export const POST_AUTH_REQUEST = 'POST/AUTH/REQUEST'
export const POST_AUTH_SUCCESS = 'POST/AUTH/SUCCESS'
export const POST_AUTH_ERROR   = 'POST/AUTH/ERROR'

export const GET_AUTH_REQUEST = 'GET/AUTH/REQUEST'
export const GET_AUTH_SUCCESS = 'GET/AUTH/SUCCESS'
export const GET_AUTH_ERROR   = 'GET/AUTH/ERROR'

export const DELETE_AUTH_REQUEST = 'DELETE/AUTH/REQUEST'
export const DELETE_AUTH_SUCCESS = 'DELETE/AUTH/SUCCESS'
export const DELETE_AUTH_ERROR   = 'DELETE/AUTH/ERROR'


const initialState = {
  pending: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_AUTH_REQUEST:
      return { ...state, success: undefined, error: undefined, pending: undefined }
    case POST_AUTH_SUCCESS: case GET_AUTH_SUCCESS:
      return { ...action.payload, success: true, error: undefined, pending: undefined }
    case POST_AUTH_ERROR: case GET_AUTH_ERROR:
      return { ...state, success: undefined, error: action.error, pending: undefined }
    case DELETE_AUTH_REQUEST:
      localStorage.removeItem("token")
      return { ...initialState, pending: undefined }
    default:
      return state
  }
}

export const postLogout = () => ({
  type: DELETE_AUTH_REQUEST
})

export const postAuth = (payload) => ({
  type: POST_AUTH_REQUEST,
  payload
})

export const getAuth = () => ({
  type: GET_AUTH_REQUEST
})