'use strict';

var React = require('react');
var RecipeList = require('./recipes/recipeList');

var Home = React.createClass
({

	getInitialState: function()
	{
		return {
			recipes: [
				{id: 0, name: 'Turtle Soup', ingredients: ['turtle', 'basil', 'water']},
				{id: 1, name: 'Cherry Pie', ingredients: ['pie crust', 'cherries']},
				{id: 2, name: 'Toast', ingredients: ['bread', 'butter']}
			]
		};
	},

	render: function()
	{
		return (
			<div>
				<div className="jumbotron">
					<h1>Recipe Box</h1>
					<p>A project for FreeCodeCamp using React and Sass.</p>
				</div>
				<RecipeList data={this.state.recipes} />
				<button className="btn btn-primary">New Recipe</button>
			</div>
		);
	}
});

module.exports = Home;
