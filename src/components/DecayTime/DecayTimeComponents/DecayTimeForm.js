import React, {Component} from 'react';

class DecayTimeForm extends Component {

  render(){
    return (
      <div style={{'marginRight': '5px'}}>
        Decay Time: <input
          type='number'
          value={this.props.decayTime}
          onChange={this.props.formUpdate}
        /> yrs
      </div>
    )
  }
}

export default DecayTimeForm;
