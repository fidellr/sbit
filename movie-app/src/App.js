//#region PACKAGE IMPORTS
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//#endregion

//#region CONFIG IMPORTS
import routes from './config/routes';
import { useStore } from './config/stores';
//#endregion

function App() {
  const store = useStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<span>Loading..</span>}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.name} {...route} />
            ))}
            <Redirect to="/" />
          </Switch>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
