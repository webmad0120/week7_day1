import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    const formatName = user => `${user.firstName} ${user.lastName}`
    const displayAvartar = user => user.avatarUrl ? <img src={user.avatarUrl} /> : <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300' />

    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: 'https://cosasdigitales.com/wp-content/uploads/2017/07/clases-javascript-poo-cosas-digitales-360x240.jpg'
    }

    return (
      <>
        <h2>Hello, {formatName(user)}!</h2>
        {displayAvartar(user)}
      </>
    )
  }
}


export default App