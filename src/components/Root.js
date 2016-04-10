import React, { Component, PropTypes } from 'react';

// Import styles
import '../styles/main.scss';

const CLASS_NAME = 'yf-root';

class Root extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;
    return (
      <div className={ CLASS_NAME }>
        { children }
      </div>
    );
  }
}

export default Root;