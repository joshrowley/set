var React = require('react');
var Card = require('./Card.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return {
      logins: ['joshrowley', 'snags88', 'adamjonas']
    };
  },

  render: function () {
    var cards = this.state.logins.map(function (login) {
      return (<Card login={login} />);
    });

    return (
      <div>
        { cards }
      </div>
    );
  }
});

module.exports = Main;
