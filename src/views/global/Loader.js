import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
  render() {
    return (
		<div className='loader-component'></div>
    )
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(Loader)