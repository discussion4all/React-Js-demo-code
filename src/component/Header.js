import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="sticky-top">
        <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark ">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="images/logo_1.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
         
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>        
        );
    }
}

export default Header;