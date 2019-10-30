import React, { Component } from 'react';

export default class RandomC255olor extends Component {
  state = {
    backgroundColor: 'rgb(0, 0, 0)'
  };

  generateRGBvalue = () => {
    return `rgb(${Math.floor(Math.random() * (256))}, ${Math.floor(Math.random() * (256))}, ${Math.floor(Math.random() * (256))}`
  }

  setColor = (rgbValue) => {
    this.setState({ backgroundColor: rgbValue })
  }

  componentDidMount() {
    setInterval(() => this.setColor(this.generateRGBvalue()), 1000);
  }

  render() {
    const { backgroundColor } = this.state;
    return (
        <div style={{ 
          backgroundColor,
          height: '100vh',
          width: '100vw' }} />
    )
  }
}