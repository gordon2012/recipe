'use strict';

var React = require('react');
var RecipeDetails = require('./recipeDetails');

var Recipe = React.createClass
({
	getInitialState: function()
	{
		return {
			open: false,
			class: 'recipe'
		};
	},

	handleClick: function()
	{
		this.setState
		({
			open: !this.state.open,
			class: this.state.open ? 'recipe' : 'recipe open'
		});
	},

	render: function()
	{
		var details;
		if(this.state.open)
		{
			details = <RecipeDetails data={this.props.data}/>;
		}

		return (
			<div className={this.state.class}>
				<div className="recipe-heading" onClick={this.handleClick}>{this.props.data.name}</div>
				<div className="detail-wrap">
					<div className="detail">
						{details}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Recipe;
