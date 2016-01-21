'use strict';
var React = require('react');
var Home = require('./components/homePage');

var App = React.createClass
({
	render: function()
	{
		return (
			<div>
				<Home />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
