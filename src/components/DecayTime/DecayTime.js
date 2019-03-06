import React, {Component} from 'react';
import DecayTimeForm from './DecayTimeComponents/DecayTimeForm';
import DecayTimeSlider from './DecayTimeComponents/DecayTimeSlider';
import './DecayTime.css';

class DecayTime extends Component {

  render() {
    return (
      <div className='DecayTimeComponent'>
        <DecayTimeForm
          formUpdate={this.props.formUpdate}
          decayTime={this.props.decayTime}
          changeSlider={this.props.slideUpdate}
        />
        <DecayTimeSlider
          changeDecayValue={this.props.slideUpdate}
          currPosition={this.props.currentPosition}
        />
      </div>
    )
  }
}

export default DecayTime;
