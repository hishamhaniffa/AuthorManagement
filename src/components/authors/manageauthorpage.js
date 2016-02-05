'use strict';

var React = require('react');
var AuthorForm = require('./authorform');

var ManageAuthorPage = React.createClass({
	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''}
		};
	},
	setAuthorState: function(evt) {
		var field = evt.target.name;
		var value = evt.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},
	render: function() {
		return (
			<AuthorForm author={this.state.author} onChange={this.setAuthorState} />
		);
	}
});

module.exports = ManageAuthorPage;