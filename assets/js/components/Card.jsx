var React = require('react');

var Card = React.createClass({
  render: function () {
    return(
      <ul>
        <li>Number: { this.props.number }</li>
        <li>Symbol: { this.props.symbol }</li>
        <li>Shading: { this.props.shading }</li>
        <li>Color: { this.props.color }</li>
      </ul>
    );
  }
});

module.exports = Card;
