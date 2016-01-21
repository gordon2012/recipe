'use strict';

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass
({
	render: function()
	{
		return (
			<div className="recipe-box">
				{this.props.data.map(function(recipe)
				{
					return <Recipe key={recipe.id} data={recipe} detail="on"/>;
				})}
			</div>
		);
	}
});

module.exports = RecipeList;
