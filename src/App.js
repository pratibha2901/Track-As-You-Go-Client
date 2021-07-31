import "./App.css";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Finished from "./Components/Finished";
import Pending from "./Components/Pending";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Grid from "@material-ui/core/Grid";
import AppBar from "./Components/Header/AppBar";
import {
  
  responsiveFontSizes,
  ThemeProvider,
  
} from "@material-ui/core/styles";
import { Provider } from "react-redux";
import theme from "./utils/theme";
import store from './redux/store'



function App() {
  let themeInstance=theme;
  themeInstance=responsiveFontSizes(themeInstance);
//theme=responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={themeInstance}>
        {/*<Provider store={store}></Provider>*/}
        <Router>
          <AppBar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pending">
              <Pending />
            </Route>
            <Route path="/finished">
              <Finished />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
