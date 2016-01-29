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


	handleAddRecipe: function(event)
	{
		event.preventDefault();

		var ls = JSON.parse(localStorage.getItem('gordon2012-recipeBook'));
		ls.push({id: ls.length, name: this.state.recipe.name, ingredients: this.state.recipe.ingredients.split(',')});
		localStorage.setItem('gordon2012-recipeBook', JSON.stringify(ls));

		// TODO: notify main page of new record in localStorage

		this.props.handleClose(event);
	},

	setRecipeState: function(event)
	{
		this.setState({dirty: true});
		this.state.recipe[event.target.name] = event.target.value;
		return this.setState({recipe: this.state.recipe});
	},

	render: function()
	{

		var closeStyle = {
			fontWeight: '30px',
			textDecoration: 'none'
		};
		closeStyle.color = this.state.dirty ? '#f00' : '#888';

		return (
			<form>
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
						<input type="submit" value="Add Recipe" className="btn btn-primary" onClick={this.handleAddRecipe} />
						<input type="submit" value="Close" className="btn btn-default pull-right" onClick={this.props.handleClose} />
					</div>
				</div>
			</form>
		);
	}
});

module.exports = RecipeManage;
