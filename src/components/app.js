import Home from '../pages/home.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogHome from '../pages/Blog.js';
import Footer from './footer.js';
import ArticlePage from '../pages/articlePage.js';
import MenuIcon from './menuIcon';
import NavBarContainer from './navBarContainer.js';


function App() {
    return (
      <BrowserRouter>
        <MenuIcon/>
        <NavBarContainer classContainer='navBar_container' class='barra_navegación'/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blog' component={BlogHome}/>
          <Route exact path='/blog/article' component={ArticlePage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
  
  export default App;