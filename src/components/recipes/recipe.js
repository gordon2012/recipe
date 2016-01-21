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
			<div className="panel-heading">
				<div>{this.props.data.name}</div>
			</div>
		);
	}
});

module.exports = Recipe;
