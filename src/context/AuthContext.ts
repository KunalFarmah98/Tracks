import tracker from '../api/tracker';
import createDataContext from './createDataContext';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      // copy the state and change the following properties
      return {...state, errorMessage: action.payload};

    case 'signin':
      return {isSignedIn: true, token: action.payload, errorMessage: '', loading: false};

    case 'signup':
      return {isSignedIn: true, token: action.payload, errorMessage: '', loading: false};

    case 'signout':
      return {isSignedIn: false, token: null, errorMessage: '', loading: false};

    case 'clear_error':
      return {...state, errorMessage: '', loading: false};

    case 'loading':
      return {...state, loading:true};

    case 'auth':
      return {...state, loading:false};
      
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () =>{
  dispatch({type:'clear_error'});
}

const checkSignIn = dispatch => async() => {
  dispatch({type:'loading'});
  const token = await AsyncStorage.getItem('token');
  if(token){
    console.log(token);
    dispatch({type:'signin', payload: token});
  }
  else{
    dispatch({type:'auth'});
  }
}

const signUp = dispatch =>  async ({email, password}) => {
    // signUp with email and pass
    // change state based on response, share tokens and stuff
    try {
      console.log(email + ' ' + password);
      const resp = await tracker.post('/signup', {email, password});
      await AsyncStorage.setItem('token', resp.data.token);
      dispatch({type: 'signup', payload: resp.data.token});
    } catch (err) {
      // fallback in case of error
      console.log(err.response.data);
      dispatch({type: 'add_error', payload: 'Something Went Wrong :\\'});
    }
  };

const signIn = dispatch => async ({email, password}) => {
    try {
      console.log(email + ' ' + password);
      const resp = await tracker.post('/signin', {email, password});
      await AsyncStorage.setItem('token', resp.data.token);
      dispatch({type: 'signin', payload: resp.data.token});
    } catch (err) {
      console.log(err.response.data);
      dispatch({type: 'add_error', payload: 'Something Went Wrong :\\'});
    }
  };

const signOut = dispatch => async()=>{ 
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
};


export const {Provider, Context} = createDataContext(
  authReducer,
  {signUp, signIn, signOut, clearErrorMessage, checkSignIn},
  {isSignedIn: false, token: null, errorMessage: '', loading: false},
);
