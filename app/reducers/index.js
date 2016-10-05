import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import viewer from './viewer';

const rootReducer = combineReducers({
  viewer,
  routing
});

export default rootReducer;
