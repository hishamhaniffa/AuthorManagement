"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorapi');
var AuthorList = require('./authorlist');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},
	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({authors: AuthorApi.getAllAuthors() });
		}
	},
	render: function() {
		return (
			<div className="container">
				<h1>
					Authors 
					<div>
						<Link to="addAuthor" className="btn btn-default">Add Author </Link>
					</div>
				</h1>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage;