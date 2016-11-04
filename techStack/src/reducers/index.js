import { combineReducers } from 'redux';
import LibraryReducer from './libraryReducer';
import SelectionReducer from './selectionReducer.js';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
