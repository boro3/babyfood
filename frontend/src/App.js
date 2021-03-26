import React from 'react';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CreateUserPage from './pages/CreateUserPage/CreateUserPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NewRecipePage from './pages/NewRecipePage/NewRecipePage';

import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Route, Switch } from 'react-router-dom';


// import CreateUserForm from './pages/

function App() {
  return (
    <>
      <Header />     
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/singup"} component={CreateUserPage} />
        <Route exact path={"/myprofile"} component={ProfilePage} />
        <Route exact path={"/recipes/create"} component={NewRecipePage} />
      </Switch>
    </>
  );
}

export default App;
