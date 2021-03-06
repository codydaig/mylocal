import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import AddTask              from '../components/AddTask';

 class NavBar extends Component {

  isAuthenticated() {
    if (!this.props.auth.authenticated) {
      return [
        <li className="nav-item" key={ 1 }>
          <Link to="/signin" className="signin nav-item nav-link active">Sign in</Link>
        </li>,
        <li className="nav-item" key={ 2 }>
          <Link to="/signup" className="signup nav-item nav-link active">Sign up</Link>
        </li>
      ];
    } else {
      return (
        <li className="nav-item btn-group">
          <a className="dropdown-toggle nav-link nav-item active" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
            { this.props.auth.name }
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <Link className="dropdown-item" to="/account">My Profile</Link>
            <Link className="dropdown-item" to="/favorites">My Favorites</Link>
            <AddTask />
            <div className="dropdown-divider"></div>
            <Link to="/signout" className="dropdown-item">Sign Out</Link>
          </div>
        </li>
      );
    }
  }

  render() {
    return (
      <header className="navbar navbar-light navbar-fixed-top bd-navbar">
        <div className="container-fluid navbar-fluid">
          <nav style={{ 'fontSize': '20px' }}>
            <div className="clearfix">
              <button className="navbar-toggler pull-xs-right hidden-sm-up" style={{ 'outline':'none', 'marginTop': '13px', 'color': '#999' }} type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                ☰
              </button>
              <Link className="navbar-brand hidden-sm-up" to="/"><img src="/img/logo.svg" style={{ 'width': '80px' }} /></Link>
            </div>
            <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
              <ul className="nav navbar-nav">
                <li className="nav-item hidden-xs-down">
                  <Link className="navbar-brand" to="/"><img src="/img/logo.svg" style={{ 'width': '80px' }}/></Link>
                </li>
              </ul>
              <ul className="nav navbar-nav pull-sm-right" style={{ 'marginTop': '13px' }}>
                <li className="nav-item">
                  <Link className="nav-item nav-link active" to="/">Home</Link>
                </li>
                { this.isAuthenticated() }
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(NavBar);