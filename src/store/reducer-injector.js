import { combineReducers } from "redux";

export function createReducerInjector(store, rootReducers) {
	const injectedReducers = [];
	const isInjected = key => injectedReducers.some(ir => ir === key);

	store.asyncReducers = {};

	return (key, reducer) => {
		if (!isInjected(key)) {
			store.asyncReducers[key] = reducer;
			store.replaceReducer(createReducer(store.asyncReducers, rootReducers));
			injectedReducers.push(key);
		}
	};
}

function createReducer(asyncReducers, rootReducers) {
	return combineReducers({
		...asyncReducers,
		...rootReducers,
	});
}