import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Booking from './Pages/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRouter/PrivateRoute';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/booking/:bookingId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
