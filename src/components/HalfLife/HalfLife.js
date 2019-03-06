import React, {Component} from 'react';
import './HalfLife.css';

class HalfLife extends Component {
  render() {
    return (
      <div className='HalfLife'>
        Half-Life: <input type='number' onChange={this.props.updateHalfLife} defaultValue='0'/> yrs
      </div>
    )
  }
}

export default HalfLife;
