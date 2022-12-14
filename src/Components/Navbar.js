import React from 'react'
import PropTypes from 'prop-types'
import About from './About'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About">{props.about}</a>
            </li>
          </ul>
          <div class="mx-2">
                        <button class="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#logInModal">Login</button>
                        <button class="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#signUpModal">SignUp</button>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div> 
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  about : PropTypes.string
}

Navbar.defaultProps = {
  title : 'Set title here',
  about : 'About here'
}