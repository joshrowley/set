var React = require('react');
var Button = require('./Button.jsx');
var Result = require('./Result.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    };
  },

  handleClick: function (increment) {
    this.setState({
      counter: this.state.counter + increment
    });
  },

  render: function () {
    return (
      <div>
        <Button localHandleClick={ this.handleClick } increment={ 1 }/>
        <Button localHandleClick={ this.handleClick } increment={ 5 }/>
        <Button localHandleClick={ this.handleClick } increment={ 10 }/>
        <Button localHandleClick={ this.handleClick } increment={ 100 }/>
        <Result localCounter={ this.state.counter }/>
      </div>
    );
  }
});

module.exports = Main;
