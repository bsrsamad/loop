import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tpage from "./Components/Tpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Tpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
