import React from 'react';
import { withRouter, Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

const style = {
  nav: { background: '#3D95CE', display: 'flex' },
  left: { display: 'none' },
  log_out: { color: '#fff', textDecoration: 'underline' }
};

const Navbar = (props) => {

  let logOutAndRedirect = () => {
    props.logUserOut();
    // props.history.push("/login");
  }

  return (
    <AppBar 
      className='navbar'
      style={style.nav}
      title={
        <div className='navbar-logo'>
          <Link to="/"><span>Paywaal</span></Link>
        </div>
      }
      iconStyleLeft={style.left}
      iconElementRight={
        <div>
          {props.isLoggedIn &&
            <FlatButton 
              style={style.log_out}
              hoverColor='#03A9F4'
              className='navbar-logout' 
              onClick={logOutAndRedirect} 
              label="Log Out" 
            />
          }
        </div>
      }
    />
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps)(Navbar));
