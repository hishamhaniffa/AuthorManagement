'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homepage')} />
		<Route name="authors" handler={require('./components/authors/authorpage')} />
		<Route name="addAuthor" path="author" handler={require('./components/authors/manageauthorpage')} />
		<Route name="about" handler={require('./components/about/aboutpage')} />
		<NotFoundRoute handler={require('./components/notfoundpage')} />
		<Redirect from="about-us" to="about" />
	</Route>
);

module.exports = routes;