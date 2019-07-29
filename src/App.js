import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.7.0';

import Header from 'components/header/header.component';
import HeaderLinks from 'components/header-links/header-links.component';

import LandingPage from './pages/landing/landing.component';
import AuthPage from './pages/auth/auth.component';

import { auth, firestore, FirebaseContext } from './firebase/firebase.utils';
import useAuth from './hooks/useAuth';

const App = () => {
  const currentUser = useAuth();

  console.log(currentUser);

  return (
    <FirebaseContext.Provider value={{ currentUser, auth, firestore }}>
      <div className="App">
        <Header
          color="transparent"
          routes={[]}
          leftLinks={<HeaderLinks left />}
          rightLinks={<HeaderLinks currentUser={currentUser} />}
          fixed
          changeColorOnScroll={{
            height: 240,
            color: 'white'
          }}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sign-in" component={AuthPage} />
        </Switch>
      </div>
    </FirebaseContext.Provider>
  );
};

export default App;
