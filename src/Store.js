import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

// import all the reducers
import {Reducer as AuthProcessorReducer} from './Components/AuthProcessor';
import {Reducer as ActiveImageCardProcessorReducer} from './Components/ActiveImageCardProcessor';

const initValues = {
    AuthProcessor: {
        hasLoggedIn: false,
    },
    ActiveImageCardProcessor: {
        activeImageCardList: [],
        activeImageCardIndex: 0
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
    ActiveImageCardProcessor: ActiveImageCardProcessorReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);