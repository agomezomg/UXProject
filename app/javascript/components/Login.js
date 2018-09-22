import React, { Component } from 'react';
import AllUsers from './Users.js';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
    render() {
    return <div><AllUsers/></div>;
  }
}
