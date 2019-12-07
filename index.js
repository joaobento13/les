console.disableYellowBox = true;

import React from "react";
import { AppRegistry, Text, TextInput } from "react-native";
import App from "./src/App";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const lesApp = props => <App />;

AppRegistry.registerComponent("lesApp", () => lesApp);