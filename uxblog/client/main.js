import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.js';

 

Meteor.startup(() => {
	const Posts = new Mongo.Collection('posts');
	Posts.insert({ title: 'Hello world', body: 'First post' });
	render(<App />, document.getElementById('render-target'));
});

