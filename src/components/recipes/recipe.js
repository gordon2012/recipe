'use strict';

var React = require('react');
var RecipeDetails = require('./recipeDetails');

var Recipe = React.createClass
({
	propTypes:
		{
			data: React.PropTypes.object.isRequired
		},

	getInitialState: function()
	{
		return {
			detail: this.props.detail
		};
	},

	handleClick: function()
	{
		this.setState({detail: (this.state.detail == 'on') ? 'off' : 'on'});
	},

	render: function()
	{
		var details;
		if(this.state.detail == 'on')
		{
			details = <RecipeDetails />;
		}

		return (
			<div>
				<div className="recipe-heading">
					<a href="#" onClick={this.handleClick}>{this.props.data.name}</a>
				</div>
				{details}
			</div>
		);
	}
});

module.exports = Recipe;
