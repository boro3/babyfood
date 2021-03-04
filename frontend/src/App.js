import './App.css';
import HomePage from './components/pages/HomePage';
import CreateRecipe from './components/pages/CreateRecipe';
import ProfilePage from './components/pages/ProfilePage';
import MyRecipes from './components/pages/MyRecipes';

import { Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Route exact path={"/"} component={HomePage} />
    <Route exact path={"/addrecipe"} component={CreateRecipe} />
    <Route exact path={"/profile"} component={ProfilePage} />
    <Route exact path={"/myrecipes"} component={MyRecipes} />
  </>
  );
}

export default App;
