var _ = require('lodash');
var React = require('react');

var Card = React.createClass({
  handleClick: function () {
    this.props.selectCard(this.props.card.id);
  },

  render: function () {
    var className = _.includes(this.props.selectedCards, this.props.card.id) ? 'selected' : '';

    return(
      <ul onClick={ this.handleClick } className={ className }>
        <li>Number: { this.props.card.number }</li>
        <li>Symbol: { this.props.card.symbol }</li>
        <li>Shading: { this.props.card.shading }</li>
        <li>Color: { this.props.card.color }</li>
      </ul>
    );
  }
});

module.exports = Card;
