'use strict';

var React = require('react');
var RecipeDetails = require('./recipeDetails');

var Recipe = React.createClass
({
	handleClick: function()
	{
		this.props.onChildClick(this.props.data.name);
	},

	render: function()
	{
		var className = this.props.open ? 'recipe open' : 'recipe';
		// var details;
		// if(this.props.open)
		// {
		// 	details = <RecipeDetails data={this.props.data}/>;
		// }

		return (
			<div className={className}>
				<div className="recipe-heading" onClick={this.handleClick}>{this.props.data.name}</div>
				<div className="detail-wrap">
					<div className="detail">
						<RecipeDetails data={this.props.data}/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Recipe;
