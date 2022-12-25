import {
    createStore,
    applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import {gameReducer} from "./reducers";
import {watcherSaga} from "./sagas";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;