import tracker from '../api/tracker';
import createDataContext from './createDataContext';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      // copy the state and change the following properties
      return {...state, errorMessage: action.payload};

    case 'signin':
    case 'signup':
      return {isSignedIn: true, token: action.payload, errorMessage: ''};

    case 'signout':
      return {isSignedIn: false, token: null, errorMessage: ''};
    default:
      return state;
  }
};

const signUp = dispatch =>  async ({email, password}) => {
    // signUp with email and pass
    // change state based on response, share tokens and stuff
    try {
      console.log(email + ' ' + password);
      const resp = await tracker.post('/signup', {email, password});
      await AsyncStorage.setItem('token', resp.data.token);
      dispatch({type: 'signup', payload: resp.data.token});
      console.log(resp);
    } catch (err) {
      // fallback in case of error
      console.log(err.response.data);
      dispatch({type: 'add_error', payload: 'SomeThing Went Wrong :\\'});
    }
  };

const signIn = dispatch => async ({email, password}) => {
    try {
      console.log(email + ' ' + password);
      const resp = await tracker.post('/signin', {email, password});
      await AsyncStorage.setItem('token', resp.data.token);
      dispatch({type: 'signin', payload: resp.data.token});
      console.log(resp);
    } catch (err) {
      console.log(err.response.data);
      dispatch({type: 'add_error', payload: 'SomeThing Went Wrong :\\'});
    }
  };

const signOut = dispatch => async()=>{ 
    await AsyncStorage.setItem('token',null);
    dispatch({type: 'signout', payload: null});
};


export const {Provider, Context} = createDataContext(
  authReducer,
  {signUp, signIn, signOut},
  {isSignedIn: false, token: null, errorMessage: ''},
);
