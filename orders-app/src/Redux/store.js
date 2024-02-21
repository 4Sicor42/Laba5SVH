import { createStore, applyMiddleware } from 'redux';

// Импортируем thunk функцию 
import thunk from 'redux-thunk'; 

import reducer from '../Redux/reducer';

// Правильно
export default createStore(
    reducer,
    applyMiddleware(thunk)  
  );