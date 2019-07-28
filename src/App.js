import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './assets/scss/material-kit-react.scss?v=1.7.0';

import Header from './components/header/header.component';
import LandingPage from './pages/landing/landing.component';
import AuthPage from './pages/auth/auth.component';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromUserSnapshot;
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        unsubscribeFromUserSnapshot = userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      unsubscribeFromUserSnapshot();
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Header
        color="transparent"
        routes={[]}
        brand="Pocket Seychelles"
        rightLinks={[]}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/sign-in" component={AuthPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
