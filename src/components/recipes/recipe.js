'use strict';

var React = require('react');
var RecipeDetails = require('./recipeDetails');

var Recipe = React.createClass
({
	// propTypes:
	// 	{
	// 		data: React.PropTypes.object.isRequired
	// 	},

	getInitialState: function()
	{
		return {
			// detail: this.props.detail
			open: false,
			class: 'recipe'
		};
	},

	handleClick: function()
	{
		// console.log(this);
		// this.setState({detail: (this.state.detail == 'on') ? 'off' : 'on'});
		this.setState
		({
			open: !this.state.open,
			class: this.state.open ? 'recipe' : 'recipe open'
		});
	},

	render: function()
	{
		// var tags = (this.state.detail == 'on') ?
		// (
		// 	<div className="recipe">
		// 		<div className="recipe-heading on">
		// 			<a href="#" onClick={this.handleClick}>{this.props.data.name}</a>
		// 		</div>
		// 		<RecipeDetails data={this.props.data}/>
		// 	</div>
		// )
		// :
		// (
		// 	<div className="recipe">
		// 		<div className="recipe-heading">
		// 			<a href="#" onClick={this.handleClick}>{this.props.data.name}</a>
		// 		</div>
		// 	</div>
		// );
		//
		// return tags;

		var details;
		if(this.state.open)
		{
			details = <RecipeDetails data={this.props.data}/>;
		}

		return (
			<div className={this.state.class}>
				<div className="recipe-heading" onClick={this.handleClick}>{this.props.data.name}</div>
				<div className="detail-wrap">
					<div className="detail">
						{details}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Recipe;
