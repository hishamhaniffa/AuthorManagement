'use strict';

var Dispatcher = require('../dispather/appDispatcher');
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
	}
};

module.exports = AuthorActions;