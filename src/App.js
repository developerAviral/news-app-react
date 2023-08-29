
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [state, setState] = useState(0);
  
  const setProgress =(progress)=>{
    setState(progress);}


    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <LoadingBar
        height={3}
        shadow={true}
        color='#0095a2'
        progress={state}
        />
        <Routes>
         <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} category="general"/>} />
         <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={5} category="business"/>} />
         <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} category="entertainment"/>} />
         <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} category="health"/>} />
         <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={5} category="science"/>} />
         <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={5} category="sports"/>} />
         <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} category="technology"/>} />
        </Routes> 

      </div>
      </BrowserRouter>
    )
  }

export default App;