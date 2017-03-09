import C from '../constants'
import getContentApi from "../api"

const initialState = {
  content: getContentApi() // Loads default language content (en) as an initial state
};

const switch_language = (state = initialState, action) => {
    switch (action.type) {
        case C.SWITCH_LANGUAGE:
            return {
                content: getContentApi(action.language)
            }
        default :
            return state
    }
}

export default switch_language;