import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

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

// 所有Reducer 放在此处
const Reducer = combineReducers({

});

export default createStore(Reducer, initValues, storeEnhancers);