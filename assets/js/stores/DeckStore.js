var alt = require('../alt');
var DeckActions = require('../actions/DeckActions');

class DeckStore {
  constructor() {
    this.deck = [];

    this.bindListeners({
      handleUpdateDeck: DeckActions.UPDATE_DECK
    });
  }

  handleUpdateDeck(deck) {
    this.deck = deck;
  }
}

module.exports = alt.createStore(DeckStore, 'DeckStore');
