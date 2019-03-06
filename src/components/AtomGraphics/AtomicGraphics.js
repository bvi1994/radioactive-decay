import React, {Component} from 'react';
import Atom from './Atom/Atom';
import './AtomicGraphics.css';

class AtomicGraphics extends Component {

  render() {
    const initialValue = this.props.initialSample;
    const arraySize = Math.ceil(initialValue / 5);
    let componentProperties = [];
    for(let i = 0; i < arraySize; i++){
      // We are initializing the atomic graphic
      if(i === arraySize - 1 && initialValue % 5 !== 0){
        componentProperties.push({
          decayed: false,
          width: ((initialValue - Math.floor(initialValue/5) * 5)/5).toFixed(2),
          decayRatio: 0,
        });
        // Fraction value needed for the last atom
        break;
      }
      componentProperties.push({decayed: false, width: 1, decayRatio: 0,})
      // Whole atoms 
    }
    const decayedSample = this.props.initialSample - this.props.currentSample
    const wholeAtomsDecayed = Math.floor(decayedSample / 5); // Sample that has been decayed. Will need to be marked orange
    const fractionAtomDecay = (decayedSample - 5 * Math.floor(decayedSample / 5)).toFixed(2) / 5
    let i;
    for(i = 0; i < wholeAtomsDecayed; i++){
      componentProperties[i].decayed = true;
    }
    if(fractionAtomDecay !== 0 && i < componentProperties.length){
      componentProperties[i].decayRatio = fractionAtomDecay;
    }
    return(
      <div className="atomGraphics"> {
          componentProperties.map((atom, index) => {
              return <Atom
                decayed={atom.decayed}
                atomWidth={atom.width}
                key={index.toString()}
                decayRatio={atom.decayRatio}
              />
          })
        }
      </div>
    )
  }

}


export default AtomicGraphics;
