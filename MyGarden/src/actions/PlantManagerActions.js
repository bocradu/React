import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import {
    PLANT_UPDATE,
    PLANT_CREATE,
    PLANTS_FETCH_SUCCESS,
    PLANT_SAVE_SUCCESS,
    SELECT_IMAGE
} from './types';

export const selectImage = () => {
    return (dispatch) => {
        const options = {
            title: 'Select image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else {
                const imageUri = `data:image/jpeg;base64,${response.data}`;
                console.log(imageUri);
                dispatch({
                    type: PLANT_UPDATE,
                    payload: { prop: 'imageUri', value: imageUri }
                });
            }
        });
    };
};

export const plantUpdate = ({ prop, value }) => {
    return {
        type: PLANT_UPDATE,
        payload: { prop, value }
    };
};

export const plantCreate = ({ name, description, species, family, color, nativeRange, habitat, imageUri }) => {
    const { currentUser } = firebase.auth();
    console.log({ name, description, species, family, color, nativeRange, habitat, imageUri });
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/plants`)
            .push({ name, description, species, family, color, nativeRange, habitat, imageUri })
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

export const plantSave = ({ name, description, species, family, color, nativeRange, habitat, imageUri, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/plants/${uid}`)
            .set({ name, description, species, family, color, nativeRange, habitat, imageUri })
            .then(() => {
                dispatch({ type: PLANT_SAVE_SUCCESS });
                Actions.plantList({ type: 'reset' });
            });
    };
};

export const plantDelete = (uid) => {
    console.log(uid);
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/plants/${uid}`)
            .remove()
            .then(() => {
                Actions.plantList({ type: 'reset' });
            });
    };
};

