import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';
import LifecycleSample from './LifecycleSample';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상 생성</button>

        <ErrorBoundary>
          <LifecycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
