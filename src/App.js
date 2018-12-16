import React, { Component } from 'react';
import './App.css';
import Activity from './components/Activity';
import Calendar from './components/Calendar';
import Spotlight from './components/Spotlight';

class App extends Component {
  render() {
    return (
      <div class="containerfluid">
        <div class="spacer"></div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-7 main containerfluid">
              <Activity/>
            </div>
            <div class="col-md-4">
                <Calendar/>
                <Spotlight/>
            </div>
        </div>
            <div class="row" style="height: 100px;"></div>
      </div>
    );
    //<!--<div class="row foot"><f>© Copy Right 2018 Kyle Thomas</f></div>-->
  }
}

export default App;
