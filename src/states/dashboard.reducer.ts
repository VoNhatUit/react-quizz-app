import { IActionCreator } from "../types/action"
import { IDashboardState } from "../types/dasbhoard"

const initialState: IDashboardState = {
  categories: [],
  amount: 0,
  category: 0,
  difficulty: '',
  type: ''
}

export const dashboardReducer = (state = initialState, action: IActionCreator) => {
  switch(action.type) {
    case 'SET_CATEGORIES': {
      return {
        ...state,
        categories: action.payload
      }
    }
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: action.payload
      }
    }
    case 'SET_AMOUNT': {
      return {
        ...state,
        amount: action.payload
      }
    }
    case 'SET_TYPE': {
      return {
        ...state,
        type: action.payload
      }
    }
    case 'SET_DIFFICULTY': {
      return {
        ...state,
        difficulty: action.payload
      }
    }
    default:
      return state
  }
}