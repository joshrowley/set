var _ = require('lodash');
var React = require('react');
var Card = require('./Card.jsx');

var Game = React.createClass({
  getInitialState: function () {
    var numbers = [1, 2, 3];
    var symbols = ['diamond', 'squiggle', 'oval'];
    var shading = ['solid', 'striped', 'open'];
    var colors  = ['red', 'green', 'purple'];

    var deck = _.shuffle(_.reduce(numbers, function (deck, number) {
      _.each(symbols, function (symbol) {
        _.each(shading, function (shading) {
          _.each(colors, function (color) {
            deck.push({
              number: number,
              symbol: symbol,
              shading: shading,
              color: color
            });
          });
        });
      });

      return deck;
    }, []));

    var board = deck.splice(0, 12);

    return {
      deck: deck,
      board: board
    };
  },

  render: function() {
    var board = _.map(this.state.board, function (card) {
      return(
        <Card number={ card.number } symbol={ card.symbol } shading={ card.shading } color={ card.color } />
      );
    });

    return (
      <div>
        Cards remaining: { this.state.deck.length }
        { board }
      </div>
    );
  }
});

module.exports = Game;
