import { combineReducers } from 'redux';
import LibraryReducer from './libraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});
