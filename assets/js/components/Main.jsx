var React = require('react');
var Card = require('./Card.jsx');
var Form = require('./Form.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return {
      logins: []
    };
  },

  addCard: function (loginToAdd) {
    this.setState({
      logins: this.state.logins.concat(loginToAdd)
    });
  },

  render: function () {
    var cards = this.state.logins.map(function (login) {
      return (<Card login={ login } />);
    });

    return (
      <div>
        <Form addCard={ this.addCard }/>
        { cards }
      </div>
    );
  }
});

module.exports = Main;
