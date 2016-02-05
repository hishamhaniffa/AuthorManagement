'use strict';

var React = require('react');

var AuthorForm = React.createClass({
	render: function() {
		return (
			<form className="row col-sm-4 col-sm-offset-3">
				<h1>Manage Author</h1>
				<div className="form-group">
					<label htmlFor="firstName" className="label-control">First Name</label>
					<input type="text" 
							className="form-control" 
							placeholder="First Name" 
							name="firstName" 
							ref="firstName" 
							value={this.props.author.firstName} 
							onChange={this.props.onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="lastName" className="label-control">Last Name</label>
					<input type="text" 
							className="form-control" 
							placeholder="Last Name" 
							name="lastName" 
							ref="lastName" 
							value={this.props.author.lastName} 
							onChange={this.props.onChange}/>
				</div>
				<input type="submit" value="Save" className="btn btn-default" />
			</form>
		);
	}
});

module.exports = AuthorForm;