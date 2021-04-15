import React from 'react';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CreateUserPage from './pages/CreateUserPage/CreateUserPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NewRecipePage from './pages/NewRecipePage/NewRecipePage';
import MyRecipesPage from './pages/MyRecipesPage/MyRecipes';
import EditRecipePage from './pages/EditRecipePage/EditRecipePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Footer from './components/Footer/Footer';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import './assets/styles/theme.css';
import './assets/styles/global.css';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />   
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <ProtectedRoute exact path={"/recipes/create"} component={NewRecipePage} /> 
        <ProtectedRoute exact path={"/myrecipes/:id"} component={EditRecipePage} />
        <ProtectedRoute exact path={"/myrecipes"} component={MyRecipesPage} /> 
        <Route exact path={"/recipes/:category"} component={CategoryPage} />
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/singup"} component={CreateUserPage} />
        <ProtectedRoute exact path={"/myprofile"} component={ProfilePage} />       
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
