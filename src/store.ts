import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import { dashboardReducer } from "./states/dashboard.reducer";
import { appReducer } from "./states/app.reducer";
import { scoreReducer } from "./states/score.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  dashboard: dashboardReducer,
  score: scoreReducer
})

export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk as any)
    // other store enhancers if any
  )
);

/*
state = {
  app: {
    isLoading: false
  },
  dashboard: {
    categories: []
  }
  score: {
    ...
  }
}

rootReducer = (state, action) => {
  switch(action.type) {
    case 'APP/SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      }
    }
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
    case 'SCORE/INCREASE_SCORE': {
      return {
        ...state,
        score: state.score + 1
      }
    }
    default:
      return state
  }
}

*/
