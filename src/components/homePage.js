'use strict';

var React = require('react');
var RecipeList = require('./recipes/recipeList');
var PopUp = require('./common/popUp');

var Home = React.createClass
({

	getInitialState: function()
	{
		return {
			recipes: [
				{id: 0, name: 'Turtle Soup', ingredients: ['turtle', 'basil', 'water']},
				{id: 1, name: 'Cherry Pie', ingredients: ['pie crust', 'cherries']},
				{id: 2, name: 'Toast', ingredients: ['bread', 'butter']}
			],
			show: false
		};
	},

	handleClick: function()
	{
		console.log(this.state.show ? 'Hiding' : 'Showing');
		this.setState({show: !this.state.show});
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
				<button className="btn btn-primary new-recipe"
					onClick={this.handleClick}>Add Recipe
				</button>
				<PopUp show={this.state.show}
					handleClose={this.handleClick}
				/>
			</div>
		);
	}
});

module.exports = Home;
