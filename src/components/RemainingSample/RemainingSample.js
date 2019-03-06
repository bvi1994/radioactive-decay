import React, {Component} from 'react'
import './RemainingSample.css';

class RemainingSample extends Component {

  render(){
    const remainingSample = this.props.remainingSample;
    return (
      <p className='RemainingSample'>
        { !isNaN(remainingSample) ? 'Remaining Sample: ' + remainingSample.toFixed(2) + ' grams' : 'Enter values above' }
      </p>
    )
  }
}

export default RemainingSample;
