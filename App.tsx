import React from 'react';
import { Context as AuthContext, Provider as AuthProvider } from './src/context/AuthContext';
import AuthComponent from './src/components/AuthComponent';
import AppComponent from './src/components/AppComponent';
import { useContext } from 'react';
import { useEffect } from 'react';

const App = () => {


  const { state, checkSignIn } = useContext(AuthContext);
  console.log(state.token);

  useEffect(()=>{
    checkSignIn();
  },[]);

  return (
    (state.loading)?null:
    (state.token === null) ? <AuthComponent />
      :<AppComponent />
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
