import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { routeCodes } from '../config/routes';

import title from './images/pokedex_title.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
			<div>
        <div className='top-screen'>
          <img src={title} alt='' className='home-image'/>
          <span className='home-title'>created by Gia</span>
        </div>
        <div className='bottom-screen'>
        <NavLink to={routeCodes.POKEMONLIST} className='home-anchor'>
          <div className='home-button'>
            START
          </div>
        </NavLink>
        </div>
      </div>
		)
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(Home)