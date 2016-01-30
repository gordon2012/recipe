'use strict';

var React = require('react');
var RecipeList = require('./recipes/recipeList');
var PopUp = require('./common/popUp');
var RecipeManage = require('./recipes/recipeManage');

var Home = React.createClass
({
	getInitialState: function()
	{
		var recipes = [];

		if(localStorage['gordon2012-recipeBook'])
		{
			recipes = JSON.parse(localStorage['gordon2012-recipeBook']);
		}

		return {
			recipes: recipes,
			show: false
		};
	},

	addRecipe: function(recipe)
	{
		var recipes = this.state.recipes;
		recipes.push(recipe);
		this.setState({recipes: recipes});
		localStorage['gordon2012-recipeBook'] = JSON.stringify(recipes);
	},

	handleClick: function(event)
	{
		event.preventDefault();
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
					width="60%"
					minHeight="100px">
					<RecipeManage handleClose={this.handleClick} onAddRecipe={this.addRecipe} />
				</PopUp>
			</div>
		);
	}
});

module.exports = Home;
