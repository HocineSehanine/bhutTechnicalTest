import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cars from './pages/Cars';
import CreatingCar from './pages/CreatingCar';
import UpdatingCar from './pages/updatingCar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cars" component={ Cars } />
          <Route path="/updating/:carId" component={ UpdatingCar } />
          <Route path="/create" component={ CreatingCar } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;