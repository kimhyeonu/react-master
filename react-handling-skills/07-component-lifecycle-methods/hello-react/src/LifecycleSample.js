import React, { Component } from 'react';

class LifecycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);

    console.log('constructor()');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps()');

    if (nextProps.color !== prevState.color) {
      return {
        color: nextProps.color,
      };
    }

    return null;
  }

  render() {
    console.log('render()');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p>color: {this.state.color}</p>

        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate(${nextProps}, ${nextState})`);

    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`getSnapshotBeforeUpdate(${prevProps}, ${prevState})`);

    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate(${prevProps}, ${prevState}, ${snapshot})`);

    if (snapshot) {
      console.log(`업데이트되기 직전 색상: ${snapshot}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
}

export default LifecycleSample;
