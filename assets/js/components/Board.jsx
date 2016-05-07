var React = require('react');
var Card  = require('./Card.jsx');

var Board = React.createClass({
  toggleCard: function (cardID) {
    this.props.toggleCard(cardID);
  },

  render: function () {
    var component = this;

    var board = _.map(this.props.board, function (card) {
      return(
        <Card key={ card.id }
              card={ card }
              selectedCards={ component.props.selectedCards } 
              toggleCard={ component.props.toggleCard }
        />
      );
    });

    return(
      <div>
        { board }
      </div>
    );
  }
});

module.exports = Board;
