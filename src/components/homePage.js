'use strict';

var React = require('react');
var RecipeList = require('./recipes/recipeList');
var PopUp = require('./common/popUp');

var Home = React.createClass
({

	getInitialState: function()
	{

		// var stateObj = {show: false};
		// var recipes = [];

		if(localStorage.length > 0)
		{
			console.log('has localStorage');
			// console.log(localStorage);
		}
		else
		{
			console.log('no localStorage');

			localStorage.setItem('gordon2012-recipeBook', JSON.stringify
			([
				{id: 0, name: 'Turtle Soup', ingredients: ['turtle', 'basil', 'water']},
				{id: 1, name: 'Cherry Pie', ingredients: ['pie crust', 'cherries']},
				{id: 2, name: 'Toast', ingredients: ['bread', 'butter']},
			]));
		}

		// var testObj = JSON.parse(localStorage.getItem('gordon2012-recipeBook'));
		// console.log(testObj);



		return {
			// recipes: [
			// 	{id: 0, name: 'Edible Goo', ingredients: ['Rat Tail', 'Rat Ears']},
			// ],
			recipes: JSON.parse(localStorage.getItem('gordon2012-recipeBook')),
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
