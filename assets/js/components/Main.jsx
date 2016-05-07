var React = require('react');
var Card = require('./Card.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Card login='joshrowley'/>
        <Card login='snags88'/>
        <Card login='adamjonas'/>
      </div>
    );
  }
});

module.exports = Main;
