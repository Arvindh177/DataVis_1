import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../src/components/Main';

const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Main/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter;
