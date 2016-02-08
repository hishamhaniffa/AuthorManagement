'use strict';

var Dispatcher = require('../dispatcher/appdispatcher');
var AuthorApi = require('../api/authorapi');
var ActionTypes = require('../constants/actiontypes');

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		// dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},
	updateAuthor: function(author) {
		var updateAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updateAuthor
		});
	}
};

module.exports = AuthorActions;