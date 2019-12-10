import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Header from './Header'
import RegisterPage from './components/auth/Register';


class App extends Component {

  render () {
    return (
        <div className="container">
            
            <RegisterPage />
        </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))