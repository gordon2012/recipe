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
		var classTop, classWrap, classDetail;

		if(this.props.open)
		{
			classTop = 'recipe open';
			classWrap = 'detail-wrap margin-8 border-r';
			classDetail = 'detail margin-8 border-g';
		}
		else
		{
			classTop = 'recipe';
			classWrap = 'detail-wrap';
			classDetail = 'detail';
		}



		return (
			<div className={classTop}>
				<div className="recipe-heading" onClick={this.handleClick}>{this.props.data.name}</div>
				<div className={classWrap}>
					<h4>Detail Wrap</h4>
					<div className={classDetail}>
						Detail
						<RecipeDetails data={this.props.data}/>
						End detail
					</div>
					<button className="btn btn-danger">Delete</button><button className="btn btn-default">Edit</button>
				</div>
			</div>
		);
	}
});

module.exports = Recipe;
