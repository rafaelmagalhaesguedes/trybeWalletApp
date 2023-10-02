//
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import Default from './reducers';

const store = createStore(Default, composeWithDevTools(applyMiddleware(thunk)));

export default store;
