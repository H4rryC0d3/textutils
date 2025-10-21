import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-lg`} style={{
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid rgba(255,255,255,0.1)'
    }}>
    <div className="container-fluid">
      <Link 
        className="navbar-brand fw-bold" 
        to="/"
        style={{
          fontSize: '1.5rem',
          transition: 'all 0.3s ease',
          textShadow: props.mode === 'dark' ? '0 0 10px rgba(255,255,255,0.3)' : 'none'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.letterSpacing = '1px';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.letterSpacing = '0px';
        }}
      >
        {props.title}
      </Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link 
              className="nav-link position-relative" 
              aria-current="page" 
              to="/"
              style={{
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.color = '#0d6efd';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.color = '';
              }}
            >
              Home
              <span 
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '2px',
                  backgroundColor: '#0d6efd',
                  transition: 'width 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.width = '80%'}
              ></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link position-relative" 
              to="/about"
              style={{
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.color = '#0d6efd';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.color = '';
              }}
            >
              About
            </Link>
          </li>
        </ul>
         
        <div className="d-flex align-items-center gap-2 p-2 rounded" style={{
          backgroundColor: props.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease'
        }}>
          <span className="me-2 small fw-semibold" style={{
            color: props.mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)'
          }}>Theme:</span>
          
          <div 
            className="bg-primary rounded-circle position-relative" 
            onClick={()=>{props.toggleMode('Primary')}} 
            style={{
              height: '25px',
              width: '25px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(13, 110, 253, 0.4)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(360deg)';
              e.target.style.border = '2px solid white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.border = '2px solid transparent';
            }}
          ></div>
          
          <div 
            className="bg-danger rounded-circle" 
            onClick={()=>{props.toggleMode('danger')}} 
            style={{
              height: '25px',
              width: '25px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(220, 53, 69, 0.4)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(360deg)';
              e.target.style.border = '2px solid white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.border = '2px solid transparent';
            }}
          ></div>
          
          <div 
            className="bg-success rounded-circle" 
            onClick={()=>{props.toggleMode('success')}} 
            style={{
              height: '25px',
              width: '25px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(25, 135, 84, 0.4)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(360deg)';
              e.target.style.border = '2px solid white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.border = '2px solid transparent';
            }}
          ></div>
          
          <div 
            className="bg-warning rounded-circle" 
            onClick={()=>{props.toggleMode('warning')}} 
            style={{
              height: '25px',
              width: '25px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(255, 193, 7, 0.4)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(360deg)';
              e.target.style.border = '2px solid white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.border = '2px solid transparent';
            }}
          ></div>
          
          <div 
            className="bg-dark rounded-circle" 
            onClick={()=>{props.toggleMode('dark')}} 
            style={{
              height: '25px',
              width: '25px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(33, 37, 41, 0.4)',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(360deg)';
              e.target.style.border = '2px solid white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.border = '2px solid transparent';
            }}
          ></div>
          
          <div 
            className="bg-light rounded-circle" 
            onClick={()=>{props.toggleMode('light')}} 
            style={{
              height: '25px',
              width: '25px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(248, 249, 250, 0.6)',
              border: '2px solid rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(360deg)';
              e.target.style.border = '2px solid #0d6efd';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.border = '2px solid rgba(0,0,0,0.2)';
            }}
          ></div>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string,
  toggleMode: PropTypes.func
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
}
