import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Main from "./components/root/main"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
