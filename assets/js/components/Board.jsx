var React = require('react');
var Card  = require('./Card.jsx');

var Board = React.createClass({
  selectCard: function (cardID) {
    this.props.selectCard(cardID);
  },

  render: function () {
    var component = this;

    var board = _.map(this.props.board, function (card) {
      return(
        <Card key={ card.id } card={ card } selectCard={ component.selectCard } selectedCards={ component.props.selectedCards }/>
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
