'use strict';

var React = require('react');
var Input = require('../common/textInput');

var RecipeManage = React.createClass
({
	propTypes: {
		handleClose: React.PropTypes.func.isRequired
	},

	getInitialState: function()
	{
		return {
			recipe: {
				id: '',
				name: '',
				ingredients: ''
			},
			dirty: false
		};
	},


	handleAddRecipe: function()
	{


	},

	setRecipeState: function(event)
	{
		console.log(event);
		this.setState({dirty: true});
		this.state.recipe[event.target.name] = event.target.value;
		return this.setState({recipe: this.state.recipe});
	},

	render: function()
	{

		var closeStyle = {
			fontWeight: '30px',
			textDecoration: 'none',
		};
		closeStyle.color = this.state.dirty ? '#f00' : '#888';

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<span><h4>Add Recipe <a href="#" onClick={this.props.handleClose} className="pull-right"><i style={closeStyle}>&times;</i></a></h4></span>
				</div>
				<div className="panel-body">

					<Input name="name"
						label="Recipe"
						onChange={this.setRecipeState}
						value={this.state.recipe.name}
						placeholder="Recipe Name"
					/>

					<Input name="ingredients"
						label="Ingredients"
						onChange={this.setRecipeState}
						value={this.state.recipe.ingredients}
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
