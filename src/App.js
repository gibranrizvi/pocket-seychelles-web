import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.7.0';

import { auth, firestore, FirebaseContext } from 'firebase/firebase.utils';

import Header from 'components/header/header.component';
import HeaderLinks from 'components/header-links/header-links.component';

import LandingPage from 'pages/landing/landing.component';
import AuthPage from 'pages/auth/auth.component';
import DiscoverPage from 'pages/discover/discover.component';
import CategoryPage from 'pages/category/category.component';
import DashboardPage from 'pages/dashboard/dashboard.component';

import useAuth from 'hooks/useAuth';

const App = () => {
  const currentUser = useAuth();

  console.log(currentUser);

  return (
    <FirebaseContext.Provider value={{ currentUser, auth, firestore }}>
      <div className="App">
        <Header
          color="white"
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
          <Route exact path="/discover" component={DiscoverPage} />
          <Route exact path="/discover/:category" component={CategoryPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </FirebaseContext.Provider>
  );
};

export default App;
