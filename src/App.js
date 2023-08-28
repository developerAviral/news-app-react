
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress =(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <LoadingBar
        height={3}
        shadow={true}
        color='#0095a2'
        progress={this.state.progress}
        />
        <Routes>
         <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} category="general"/>} />
         <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} category="business"/>} />
         <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} category="entertainment"/>} />
         <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} category="health"/>} />
         <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} category="science"/>} />
         <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} category="sports"/>} />
         <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} category="technology"/>} />
        </Routes> 

      </div>
      </BrowserRouter>
    )
  }
}