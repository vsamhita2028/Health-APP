import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Main from "./components/root/main"
import Auth from './components/auth/authUI'
import UserUI from './components/user/UserUI';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/user" component={UserUI}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
