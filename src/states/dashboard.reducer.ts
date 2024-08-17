import { IActionCreator } from "../types/action"
import { IDashboardState } from "../types/dasbhoard"

const initialState: IDashboardState = {
  categories: [],
  amount: 0,
  category: 0,
  difficulty: '',
  type: '',
}

export const dashboardReducer = (state = initialState, action: IActionCreator) => {
  console.log('dashboardReducer')
  switch(action.type) {
    case 'DASHBOARD/SET_CATEGORIES': {
      return {
        ...state,
        categories: action.payload
      }
    }
    case 'DASHBOARD/SET_CATEGORY': {
      return {
        ...state,
        category: action.payload
      }
    }
    case 'DASHBOARD/SET_AMOUNT': {
      return {
        ...state,
        amount: action.payload
      }
    }
    case 'DASHBOARD/SET_TYPE': {
      return {
        ...state,
        type: action.payload
      }
    }
    case 'DASHBOARD/SET_DIFFICULTY': {
      return {
        ...state,
        difficulty: action.payload
      }
    }
    default:
      return state
  }
}