import { configure, addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { withInfo } from "@storybook/addon-info";

addDecorator(jsxDecorator);
addDecorator(withInfo);
// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
