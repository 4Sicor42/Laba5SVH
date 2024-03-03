import { createStore } from 'redux';
import reducers from './reducer';

const store = createStore(reducers);

export default store;

store.subscribe(() => console.info(store.getState())) 