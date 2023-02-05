import './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  

  render() {
    return (
      <>

        <BrowserRouter>

          <NavBar />
          <LoadingBar
            color='#f11946'
            
        
          />

          <Routes>
            <Route exact path='/' element={<News  apiKey={this.apiKey} key="home" />} />
            <Route exact path='/business' element={<News  apiKey={this.apiKey} type="business" key="business" />} />
            <Route exact path='/entertainment' element={<News  apiKey={this.apiKey} type="entertainment" key="enter" />} />
            <Route exact path='/health' element={<News  apiKey={this.apiKey} type="health" key="health" />} />

            <Route exact path='/sports' element={<News  apiKey={this.apiKey} type="sports" page={3} country="us" key="sports" />} />
            <Route exact path='/science' element={<News  apiKey={this.apiKey} type="science" key="science" />} />
            <Route exact path='/tech' element={<News  apiKey={this.apiKey} type="technology" key="tech" />} />
          </Routes>


        </BrowserRouter>
      </>
    )
  }
}




