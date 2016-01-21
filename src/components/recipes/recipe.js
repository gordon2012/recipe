'use strict';

var React = require('react');

var Recipe = React.createClass
({
	propTypes: {
		data: React.PropTypes.object.isRequired
	},

	render: function()
	{
		return (
			<div className="bg-success">{this.props.data.name}</div>
		);
	}
});

module.exports = Recipe;
