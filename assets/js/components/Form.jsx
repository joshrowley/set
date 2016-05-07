var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var loginInput = ReactDOM.findDOMNode(this.refs.login);
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  },

  render: function () {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input placeholder='github login' ref='login' />
        <button>Add</button>
      </form>
    );
  }
});

module.exports = Form;
