import React, {Component} from 'react';
import './InitialSample.css';


class InitialValue extends Component {
  render(){
    return (
    <div className='InitialValue'>
      Initial Sample: <input type='number' onChange={this.props.updateInitalValue} defaultValue='0'/> g
    </div>
    )
  }
}

export default InitialValue;
