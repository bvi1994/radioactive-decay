import React, {Component} from 'react';
// import './InitialSampleIndex.css';

class DecayTimeForm extends Component {

  render() {
    return (
      <div>
        0
        <input
          type='range'
          min='0'
          max='10'
          step='.01'
          id='decayTimeSlider'
          placeholder='0'
          value={this.props.currPosition}
          onChange={this.props.changeDecayValue}
        />
        1000
    </div>
    )
  }
}

export default DecayTimeForm;
