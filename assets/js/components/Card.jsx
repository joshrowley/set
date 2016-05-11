var _ = require('lodash');
var React = require('react');

var Card = React.createClass({
  handleClick: function () {
    this.props.toggleCard(this.props.card.id);
  },

  render: function () {
    var component = this;

    var className = _.includes(this.props.selectedCards, this.props.card.id) ? 'selected' : '';
    className = className + ' ' + this.props.card.color;

    var symbols = _.times(this.props.card.number, function () {
      return (
        <li className= { component.props.card.symbol + ' bg-' + component.props.card.color }></li>
      );
    });

    return(
      <ul onClick={ this.handleClick } className={ className }>
        <li>Number: { this.props.card.number }</li>
        <li>Symbol: { this.props.card.symbol }</li>
        <li>Shading: { this.props.card.shading }</li>
        { symbols }
      </ul>
    );
  }
});

module.exports = Card;
