//rcep
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class navbar extends Component {
 

  render() {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg bg-body-tertiary  `}>
  <div className="container-fluid bg-dark  " >
    <a className="navbar-brand" href="/" style={{color:"white"}}>KalTak News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="/" style={{color : 'white' }}>Home</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="/" style={{color : 'white' }}>About</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business"style={{color : 'white' }}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" style={{color : 'white' }}>Entertainment</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/health" style={{color : 'white' }}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science"style={{color : 'white' }}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports" style={{color : 'white' }}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tech" style={{color : 'white' }}>Technology</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
