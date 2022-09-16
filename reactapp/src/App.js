
import React, { Component } from 'react'

import Navbar from './Component/Navbar'
import Users from './Component/Users'
import './App.css'

export default class App extends Component {
  state = {
    users : [
      {
        id : 1,
        name : 'Harun Akgül',
        salary : 6000,
        department : 'Bilişim' 
      },
      {
        id : 1,
        name : 'Mehmet Yıldız',
        salary : 5000,
        department : 'Bilişim' 
      },
      {
        id : 1,
        name : 'Emre Yürük',
        salary : 4000,
        department : 'İnsan Kaynakları' 
      }
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title = "User App"/>
        <hr/>   
        <Users users = {this.state.users}/>
    </div>
    )
  }
}

