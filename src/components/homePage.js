'use strict';

var React = require('react');

var Home = React.createClass
({
	render: function()
	{
		return (
			<div>
				<div className="jumbotron">
					<h1>Recipe Box</h1>
					<p>A project for FreeCodeCamp using React and Sass.</p>
				</div>
				<button className="btn btn-primary">New Recipe</button>
			</div>
		);
	}
});

module.exports = Home;
