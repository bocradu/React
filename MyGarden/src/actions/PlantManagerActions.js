import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    PLANT_UPDATE,
    PLANT_CREATE,
    PLANTS_FETCH_SUCCESS,
    PLANT_SAVE_SUCCESS
} from './types';

export const plantUpdate = ({ prop, value }) => {
    return {
        type: PLANT_UPDATE,
        payload: { prop, value }
    };
};

export const plantCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/plants`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: PLANT_CREATE });
                Actions.plantList({ type: 'reset' });
            });
    };
};

export const plantsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/plants`)
            .on('value', snapshot => {
                dispatch({ type: PLANTS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const plantSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/plants/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: PLANT_SAVE_SUCCESS });
                Actions.plantList({ type: 'reset' });
            });
    };
};

export const plantDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/plants/${uid}`)
            .remove()
            .then(() => {
                Actions.plantList({ type: 'reset' });
            });
    };
};

