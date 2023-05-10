import _ from "lodash";

export function createSagaInjector(runSaga, rootSagas) {
	const injectedSagas = new Map();
	const isInjected = key => injectedSagas.has(key);

	const injectSaga = (key, saga) => {
		if (isInjected(key)) return;

		const task = runSaga(saga);

		injectedSagas.set(key, task);
	};

	_.forEach(rootSagas, saga => injectSaga(saga.key, saga.value));
	
	return injectSaga;
}