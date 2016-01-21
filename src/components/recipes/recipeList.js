'use strict';

var React = require('react');
var Recipe = require('./recipe');

var RecipeList = React.createClass
({
	render: function()
	{
		return (
			<div className="panel panel-success">
				{this.props.data.map(function(recipe)
				{
					return <Recipe key={recipe.id} data={recipe} />;
				})}
			</div>
		);
	}
});

module.exports = RecipeList;
