import React, {Component} from 'react';
import atomColored from '../../../assets/atom.png';
import atomOrange from '../../../assets/atom-orange.png'

class Atom extends Component {

  state = {
    defaultWidth: 30,
    defaultHeight: 30,
  }

  render(){
    const decayed = this.props.decayed
    const decayRatio = this.props.decayRatio
    let atom;
    if(decayRatio !== 0){
      let frag1 = <><div
        style={{
          'overflow': 'hidden',
          'position': 'relative',
          'width': (this.state.defaultWidth * this.props.atomWidth) + 'px'}}
        className={'singleAtom'}
        >
          <div id='partialDecay'
          style={{
            'overflow': 'hidden',
            'position': 'absolute',
            'width': this.state.defaultWidth * decayRatio,
          }}
          >
            <img src={atomOrange} alt={'Decayed Atom'} height={'30px'}/>
          </div>
        <div id='partialUndecay'>
          <img src={atomColored}  alt={'Undecayed Atom'} height={'30px'} />
        </div>
      </div></>
      atom = <>{frag1}</>
    } else if(decayed === true){
      atom = <>
        <div style={{
          'overflow': 'hidden',
          'width': this.state.defaultWidth * this.props.atomWidth}}
          className={'singleAtom'}>
            <img src={atomOrange} alt={'Decayed atom'} height={this.state.defaultHeight +'px'}/>
        </div>
      </>
    } else {
      atom = <>
        <div style={{
          'overflow': 'hidden',
          'width': this.state.defaultWidth * this.props.atomWidth}}
          className={'singleAtom'}>
          <img src={atomColored} alt={'Undecayed Atom'} height={this.state.defaultHeight + 'px'}/>
        </div>
      </>
    }
    return (
      atom
    )
  }

}

export default Atom;
