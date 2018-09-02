
import React, { Component } from 'react';

const holita = new Mongo.Collection("myCOL");

export default class App extends Component {
  render() {
  holita.insert({text:'Hello :3'})
    return (

      <div className="container">
      </div>

    );

  }

}

