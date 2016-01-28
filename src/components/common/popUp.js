'use strict';

var React = require('react');

var Input = require('./textInput');

var PopUp = React.createClass
({
	render: function()
	{
		var baseStyle = {
			position: 'fixed',
			width: '100%',
			height: '100%',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			background: 'rgba(0, 0, 0, 0.7)',
			transition: 'all 2s',
			visibility: 'hidden',
			opacity: '0'
		};

		if(this.props.show)
		{
			baseStyle.visibility = 'visible';
			baseStyle.opacity = '1';
		}

		var popupStyle = {
			width: '60%',
			position: 'relative',
			background: '#fff',
			margin: '120px auto'
		};

		var closeStyle = {
			fontWeight: '30px',
			textDecoration: 'none',
			color: '#888'
		};

		var voidFunc = function()
		{
			return false;
		};

		return (
			<div style={baseStyle}>
				<div style={popupStyle} className="panel panel-default">
					<div className="panel-heading">
						<span><h4>Add Recipe <a href="#" onClick={this.props.handleClose} className="pull-right"><i style={closeStyle}>&times;</i></a></h4></span>
					</div>
					<div className="panel-body">

						<Input name="recipe"
							label="Recipe"
							onChange={voidFunc}
							value=""
							placeholder="Recipe Name"
						/>

						<Input name="ingredients"
							label="Ingredients"
							onChange={voidFunc}
							value=""
							placeholder="Enter Ingredients,Separated,By Commas"
						/>

					</div>
					<div className="panel-footer" style={{height: '55px'}}>
						<button className="btn btn-primary">Add Recipe</button>
						<button className="btn btn-default pull-right" onClick={this.props.handleClose}>Close</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = PopUp;
