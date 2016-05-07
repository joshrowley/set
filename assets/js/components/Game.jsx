var _ = require('lodash');
var React = require('react');
var Card = require('./Card.jsx');

var Game = React.createClass({
  getInitialState: function () {
    var numbers = [1, 2, 3];
    var symbols = ['diamond', 'squiggle', 'oval'];
    var shading = ['solid', 'striped', 'open'];
    var colors  = ['red', 'green', 'purple'];

    var cards = _.shuffle(_.reduce(numbers, function (cards, number) {
      _.each(symbols, function (symbol) {
        _.each(shading, function (shading) {
          _.each(colors, function (color) {
            cards.push({
              number: number,
              symbol: symbol,
              shading: shading,
              color: color
            });
          });
        });
      });

      return cards;
    }, []));


    return {
      cards: cards
    };
  },

  render: function() {
    var cards = _.map(this.state.cards, function (card) {
      return(
        <Card number={ card.number } symbol={ card.symbol } shading={ card.shading } color={ card.color } />
      );
    });

    return (
      <div>
        { cards }
      </div>
    );
  }
});

module.exports = Game;
