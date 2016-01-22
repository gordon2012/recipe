'use strict';

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass
({
	getInitialState: function()
	{
		return {
			openRecipe: null
		};
	},

	onChildClick: function(recipeName)
	{
		var newOpen = this.state.openRecipe === recipeName ? null : recipeName;
		this.setState
		({
			openRecipe: newOpen
		});
	},

	render: function()
	{
		return (
			<div className="recipe-box">
				{this.props.data.map(function(recipe)
				{
					return <Recipe key={recipe.id}
						data={recipe}
						onChildClick={this.onChildClick}
						open={this.state.openRecipe===recipe.name} />;
				}.bind(this))}
			</div>
		);
	}
});

module.exports = RecipeList;
