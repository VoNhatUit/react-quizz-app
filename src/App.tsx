import { Route, Routes } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// configs
import { PAGE_URL } from './configs/page-url';

// pages
import Dashboard from './pages/dashboard';
import Question from './pages/question';
import Score from './pages/score';
import LoadingFullScreen from './components/loading-full-screen';

function App() {
  return (
    <>
      <Routes>
        <Route path={PAGE_URL.ROOT} element={<Dashboard />} />
        <Route path={PAGE_URL.QUESTION} element={<Question />} />
        <Route path={PAGE_URL.SCORE} element={<Score />} />
      </Routes>

      <LoadingFullScreen />

    
    </>
  );
}

export default App;
