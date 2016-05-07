var _ = require('lodash');
var React = require('react');
var Board = require('./Board.jsx');

var Game = React.createClass({
  getInitialState: function () {
    var numbers = [1, 2, 3];
    var symbols = ['diamond', 'squiggle', 'oval'];
    var shading = ['solid', 'striped', 'open'];
    var colors  = ['red', 'green', 'purple'];

    var id = 0;

    var deck = _.shuffle(_.reduce(numbers, function (deck, number, i) {
      _.each(symbols, function (symbol) {
        _.each(shading, function (shading) {
          _.each(colors, function (color) {
            id = id + 1;
            deck.push({
              id: id,
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
      board: board,
      selectedCards: []
    };
  },

  toggleCard: function (cardID) {
    if (_.includes(this.state.selectedCards, cardID)) {
      var cards = _.clone(this.state.selectedCards);

      _.remove(cards, function (id) {
        return id === cardID;
      });

      this.setState({
        selectedCards: cards
      });
    } else if (this.state.selectedCards.length < 3) {
      this.state.selectedCards.push(cardID);

      this.setState({
        selectedCards: this.state.selectedCards
      });
    }

  },

  render: function() {
    return (
      <div>
        Cards remaining: { this.state.deck.length }
        <Board board={ this.state.board } toggleCard={ this.toggleCard } selectedCards={ this.state.selectedCards }/>
      </div>
    );
  }
});

module.exports = Game;
