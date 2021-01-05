import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from "./features/components/header/Header";
import { Footer } from "./features/components/footer/Footer";

import { WeatherPage } from "./features/weather/WeatherPage";

function App() {
  const theme = "light";

  return (
    <Router>
      <div className={` bg-${theme} tracking-wider border-box wrapper`}>
        <div>
          <Header />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <WeatherPage />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
