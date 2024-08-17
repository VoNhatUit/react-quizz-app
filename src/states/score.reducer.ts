import { IActionCreator } from "../types/action"
import { IScoreState } from "../types/score"

const initialState: IScoreState = {
  score: 0
}

export const scoreReducer = (state = initialState, action: IActionCreator) => {
  console.log('scoreReducer')
  switch(action.type) {
    case 'SCORE/INCREASE_SCORE': {
      return {
        ...state,
        score: state.score + 1
      }
    }
    case 'SCORE/RESET_SCORE': {
      return {
        ...state,
        score: 0
      }
    }
    default:
      return state
  }
}