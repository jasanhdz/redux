import React, { Component } from 'react';
import RegularError from '../components/error.jsx';

class HandleError extends Component {
  state = {
    handleError: false,
  }
  componentDidCatch(error, info) {
    // Envía este error a un servicio como Sentry
    this.setState({
      handleError: true,
    })
  }
  render() {
    if (this.state.handleError) {
      return <RegularError />
    }
    return this.props.children
  }
}

export default HandleError;