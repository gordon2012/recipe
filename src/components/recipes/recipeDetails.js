'use strict';

var React = require('react');

var RecipeDetails = React.createClass
({
	render: function()
	{
		return (
			<div>
				<ul className="list-group recipe-details">
					<li className="list-group-item">Lorem Ipsum</li>
					<li className="list-group-item">Ergo Sum</li>
				</ul>
			</div>
		);
	}

});

module.exports = RecipeDetails;
