import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <Route exact path='./' element={<Home />}>
          </Route>
          <Route path='./search' element={<SearchPage/>}></Route>
        </Route>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
