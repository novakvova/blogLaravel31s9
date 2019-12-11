import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Головна <span className="sr-only">(current)</span></Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Реєстрація</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Pricing</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/register" tabIndex="-1" aria-disabled="true">Disabled</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavHeader
