var _ = require('lodash');
var React = require('react');
var Board = require('./Board.jsx');

var settings = {
  card_attributes: {
    number: [1, 2, 3],
    symbol: ['diamond', 'squiggle', 'oval'],
    shading: ['solid', 'striped', 'open'],
    color: ['red', 'green', 'purple']
  }
}

var Game = React.createClass({
  getInitialState: function () {

    var id = 0;

    var deck = _.reduce(settings.card_attributes.number, function (deck, number, i) {
      _.each(settings.card_attributes.symbol, function (symbol) {
        _.each(settings.card_attributes.shading, function (shading) {
          _.each(settings.card_attributes.color, function (color) {
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
    }, []);

    var board = deck.splice(0, 12);

    return {
      deck: deck,
      board: board,
      selectedCards: [],
      sets: [],
      flash: 'Welcome to Set'
    };
  },

  toggleCard: function (cardID) {
    var deck = _.clone(this.state.deck);
    var selectedCards = _.clone(this.state.selectedCards);
    var board = _.clone(this.state.board);
    var sets = _.clone(this.state.set);
    var flash = '\u00A0';

    if (_.includes(selectedCards, cardID)) {
      _.remove(selectedCards, function (id) { return id === cardID; });
    } else if (selectedCards.length < 3) {
      selectedCards.push(cardID);
    }


    if (selectedCards.length === 3) {
      // check if match
      var cards = _.filter(board, function(card) { return _.includes(selectedCards, card.id) });

      var validSet = _.every(_.keys(settings.card_attributes), function (attribute) {
        return _.uniq(_.map(cards, attribute)).length !== 2;
      });

      if (validSet) {
        _.remove(board, function (card) { return _.includes(cards, card); })
        selectedCards = [];
        board = board.concat(deck.splice(0, 3));
        flash = 'Good match!'
      } else {
        selectedCards = [];
        flash = 'Not a match!'
      }
    }

    this.setState({
      board: board,
      selectedCards: selectedCards,
      sets: sets,
      deck: deck,
      flash: flash
    });
  },

  render: function() {
    return (
      <div>
        <h1>{ this.state.flash }</h1>
        Cards remaining: { this.state.deck.length }
        <Board board={ this.state.board } toggleCard={ this.toggleCard } selectedCards={ this.state.selectedCards }/>
      </div>
    );
  }
});

module.exports = Game;
