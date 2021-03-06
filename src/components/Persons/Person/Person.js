import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
      { /*<div className="Person">*/}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
      {/* <div> */}
      </Aux>
    );
  }
}

export default withClass(Person, styles.Person);