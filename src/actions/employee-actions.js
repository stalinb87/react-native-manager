import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`Users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
};

export const employeeFetch = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`Users/${currentUser.uid}/employees`)
  .once('value').then(snapshot => {
    dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
  });
};
