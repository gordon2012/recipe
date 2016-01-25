'use strict';

var React = require('react');

var PopUp = React.createClass
({
	render: function()
	{
		var baseStyle = {
			position: 'fixed',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			background: 'rgba(0, 0, 0, 0.7)',
			transition: 'opacity 500ms',
			visibility: 'hidden',
			opacity: '0'
		};

		if(this.props.popUp)
		{
			baseStyle.visibility = 'visible';
			baseStyle.opacity = '1';
		}

		return (
			<div style={baseStyle}>

			</div>
		);
	}
});

module.exports = PopUp;
