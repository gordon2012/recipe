'use strict';

var React = require('react');

var RecipeDetails = React.createClass
({
	render: function()
	{
		return (
			<div>
				<ul className="recipe-detail list-group">
					{this.props.data.ingredients.map(function(ingr, i)
					{
						return <li className="list-group-item" key={i}>{ingr}</li>;
					})}
				</ul>
			</div>
		);
	}

});

module.exports = RecipeDetails;
