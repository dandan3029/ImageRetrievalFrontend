import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

// import all the reducers
import {Reducer as AuthProcessorReducer} from './Components/AuthProcessor';

const initValues = {
    AuthProcessor: {
        hasLoggedIn: true,
    }
};

// 所有中间件放在此处
const middleWares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
);

// all the Reducers
const Reducer = combineReducers({
    AuthProcessor: AuthProcessorReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);