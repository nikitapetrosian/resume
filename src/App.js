import { Route,Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Progects from "./pages/progects";


function App() {
  const mainRoute = process.env.NODE_ENV === 'production' ? '/resume' : '/'
  return (
    <div className='container-fluid p-0'>
        <NavBar/>
      <div className='row m-0 flex-nowrap'>        
        <Switch>
          <Route path={mainRoute} exact component={Home}/>
          <Route path='/progects' component={Progects}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
        </div>
    </div>
  );
}

export default App;
