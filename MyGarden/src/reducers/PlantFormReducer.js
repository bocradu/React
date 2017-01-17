import {
    PLANT_UPDATE,
    PLANT_CREATE,
    PLANT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLANT_UPDATE:
            return { 
                ...state,
                [action.payload.prop]: action.payload.value
            };
        case PLANT_CREATE:
            return INITIAL_STATE;
        case PLANT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
