
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 9

  // state = {
  //   progress:0
  // }

  // setProgress =  (progress)=>{
  //   this.setState({progress:progress})
  // }
  render() {
    return (
      <div>
        <Router>

          {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}

          <Navbar />


          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.pageSize} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.pageSize} category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pageSize} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.pageSize} category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.pageSize} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={this.pageSize} category="technology" />
            </Route>

          </Switch>


        </Router>
      </div>
    )
  }
}

