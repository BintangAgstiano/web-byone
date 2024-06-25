import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageIndex from './page/pageIndex';
ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <Routes>
    <Route path='/' element={<PageIndex></PageIndex>}></Route>
  </Routes>
</Router>
)
