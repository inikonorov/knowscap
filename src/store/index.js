import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

const addLogger = () => {
	if (process.env.NODE_ENV !== 'development') {
		return [];
	}

	return [createLogger({ collapsed: true })];
};

const middlewares = [thunk, ...addLogger()];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
