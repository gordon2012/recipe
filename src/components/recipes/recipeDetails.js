'use strict';

var React = require('react');

var RecipeDetails = React.createClass
({
	render: function()
	{
		return (
			<div>
				<ul className="recipe-detail">
					{this.props.data.ingredients.map(function(ingr, i)
					{
						return <li key={i}>{ingr}</li>;
					})}
				</ul>
			</div>
		);
	}

});

module.exports = RecipeDetails;
