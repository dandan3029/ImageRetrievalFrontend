import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

// import all the reducers
import {Reducer as AuthProcessorReducer} from './Components/AuthProcessor';
import {Reducer as ActiveImageCardProcessorReducer} from './Components/ActiveImageCardProcessor';
import {Reducer as RetrievalReducer} from './Pages/Retrieval';
import {IMAGE_INTEREST_OBJECT_CLASS_ID, IMAGE_INTEREST_OBJECT_CLASS_ID_TO_TEXT} from './Constant/IMAGE_INTEREST_OBJECT_CLASS';

const initValues = {
    AuthProcessor: {
        hasLoggedIn: true,
        email: "1766392942@qq.com"
    },
    Retrieval: {
        imageClassId: IMAGE_INTEREST_OBJECT_CLASS_ID.ALL_CLASSES,
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
    Retrieval: RetrievalReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);