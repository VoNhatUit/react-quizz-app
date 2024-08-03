import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.tsx'

// store
import { store } from './store.ts'

// styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

// localhost:5173 -> pages/dashboard.tsx
// localhost:5173/question -> pages/question.tsx
// localhost:5173/score -> pages/score.tsx