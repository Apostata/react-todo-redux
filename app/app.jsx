import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import {configure} from 'configureStore';

const store = configure();

store.subscribe(()=>{
	console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Limpar o jardim'));
store.dispatch(actions.setSearchText('Procurar por...'));
store.dispatch(actions.toggleShowCompleted());
//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <Provider store={store}>
  	<TodoApp/>
  </Provider>,
  document.getElementById('app')
);
