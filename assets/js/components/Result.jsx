var React = require('react');

var Result = React.createClass({
  render: function () {
    return (
      <div>{ this.props.localCounter }</div>
    );
  }
});

module.exports = Result;
