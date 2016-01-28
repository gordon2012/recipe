'use strict';

var React = require('react');
var Input = require('../common/textInput');

var RecipeManage = React.createClass
({
	propTypes: {
		handleClose: React.PropTypes.func.isRequired
	},

	render: function()
	{

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
			<div>
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
		);
	}
});

module.exports = RecipeManage;
