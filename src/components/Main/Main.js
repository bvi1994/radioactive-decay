import React, { Component } from 'react';
import InitialSample from '../InitialSample/InitialSample';
import HalfLife from '../HalfLife/HalfLife';
import DecayTime from '../DecayTime/DecayTime';
import RemainingSample from '../RemainingSample/RemainingSample';
import AtomGraphics from '../AtomGraphics/AtomicGraphics'
import './Main.css'

class Main extends Component {

  state = {
    initialSample: 0,
    halfLife: 50,
    decayTime : 0,
    currentSample: 0,
    currentPosition: 0,
  }

  updateInitalValue = (e) => {
    if(e.target.value < 0 || e.target.value > 100){
      this.setState({
        initialSample: 'error'
      })
      return;
    }
    this.setState({
      initialSample: e.target.value,
    })
  }

  updateHalfLifeValue = (e) => {
    if(e.target.value < 50 || e.target.value > 100){
      this.setState({
        halfLife: 'error'
      })
      return;
    }
    this.setState({
      halfLife: e.target.value,
    })
  }

  updateDecayTimeForm = (e) => {
    if(e.target.value < 0 || e.target.value > 1000){
      this.setState({
        decayTime: 'error'
      })
      return;
    }
    const scale = Math.log(1000) / 10
    this.setState({
      decayTime: e.target.value,
      currentPosition: Math.floor(Math.log(e.target.value) / scale),
      // Since only the decay time is given, we must figure out where
      // to put the slider at
    })
  }

  updateSlideDecay = (e) => {
    console.log('clicked');
    if(e.target.value < .05){
      // Special case to 0
      this.setState(
        {currentPosition: 0, decayTime: 0}
      );
      return;
    }
    if(e.target.value >= 9.95){
      // Special case to 1000
      this.setState(
        {currentPosition: 10, decayTime: 1000}
      )
      return;
    }
    const newPosition = e.target.value;
    const scale = Math.log(1000) / 10;
    this.setState({
      currentPosition: newPosition,
      decayTime: Math.floor(Math.exp(scale * newPosition))
      // Since only the position of the slider is given, we must extrapolate
      // the actual decay time from the position
    });
  }

  calculateDecay = () => {
    return this.state.initialSample * Math.exp(-Math.log(2) * this.state.decayTime / this.state.halfLife)
  }


  render() {
    const remainingSample = this.calculateDecay(); // This is to make the calculation easier to read
    return (
      <div className="Main">
          <InitialSample
            updateInitalValue={this.updateInitalValue}
          />
          <HalfLife
            updateHalfLife={this.updateHalfLifeValue}
          />
          <DecayTime
            formUpdate={this.updateDecayTimeForm}
            decayTime={this.state.decayTime}
            slideUpdate={this.updateSlideDecay}
            currentPosition={this.state.currentPosition}
          />
          <AtomGraphics
            initialSample={this.state.initialSample}
            currentSample={remainingSample}
          />
          <RemainingSample
            remainingSample={remainingSample}
          />
          {this.state.initialSample === 'error' ? <p>Inital sample needs to be between 0-100 grams</p> : ''}
          {this.state.halfLife === 'error' ? <p>Half life needs to be between 50-100 years</p> : ''}
          {this.state.decayTime === 'error' ? <p>Decay time needs to be between 0-1000 years</p> : ''}
      </div>
    );
  }
}

export default Main;
