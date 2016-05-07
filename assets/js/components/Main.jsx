var React = require('react');
var Card = require('./Card.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Card login='joshrowley'/>
      </div>
    );
  }
});

module.exports = Main;
