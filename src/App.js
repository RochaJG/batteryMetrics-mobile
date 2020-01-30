/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { StatusBar } from "react-native";

import Status from "./components/Status";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Status />
    </Fragment>
  );
};

export default App;
