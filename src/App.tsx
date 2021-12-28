import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import store from "./store";
import UsersList from "../src/modules/User/UsersList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UsersList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
