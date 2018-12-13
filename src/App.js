import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, incrementAsync } from "./actions/counter";
import { get_user } from "./actions/user";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.counter}
          <p>
            <button onClick={this.props.increment}>+</button>
            <br />
            <button onClick={this.props.incrementAsync}>async +</button>
            <br />
            <button onClick={this.props.get_user}>Get User</button>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  { increment, incrementAsync,get_user }
)(App);
