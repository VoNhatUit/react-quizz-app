import { combineReducers, createStore } from "redux";

// reducer
import { dashboardReducer } from "./states/dashboard.reducer";
import { appReducer } from "./states/app.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  dashboard: dashboardReducer
})
/*
state = {
  app: {
    isLoading: false
  },
  dashboard: {
    categories: []
  }
}

*/

export const store = createStore(rootReducer);