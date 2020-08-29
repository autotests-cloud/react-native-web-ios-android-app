import { translations } from "./../langs"
import { POST_AUTH_SUCCESS, GET_AUTH_SUCCESS } from "./auth"

export const SWITCH_LANG = 'SWITCH/LANG'

const initialState = {
  lang: "en",
  languages: Object.keys(translations),
  translations: translations["en"]
}

export default (state = {...initialState }, action) => {
  switch (action.type) {
    case SWITCH_LANG:
      return { ...state, lang: action.payload, translations: translations[action.payload] }
    case POST_AUTH_SUCCESS: case GET_AUTH_SUCCESS:
        const lang  = action.payload.lang || state.lang
      return { ...state, lang, translations: translations[lang] }
    default:
      return state
  }
}

export const switchLang = (payload) => ({
  type: SWITCH_LANG,
  payload
})