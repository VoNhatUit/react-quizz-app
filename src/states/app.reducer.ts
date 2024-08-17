import { IActionCreator } from "../types/action"
import { IAppState } from "../types/app"

const initialState: IAppState = {
  isLoading: false
}

export const appReducer = (state = initialState, action: IActionCreator) => {
  console.log('appReducer')
  switch(action.type) {
    case 'APP/SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default:
      return state
  }
}