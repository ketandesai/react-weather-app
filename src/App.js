import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from "./features/components/header/Header";
import { WeatherPage } from "./features/weather/WeatherPage";
import { Footer } from "./features/components/footer/Footer";
import { selectTheme } from "./features/weather/themeSlice";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <Router>
      <div className={theme}>
        <Header />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
