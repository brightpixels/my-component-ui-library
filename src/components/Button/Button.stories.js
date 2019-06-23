import React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

storiesOf("Button", module)
  .add("Default", () => <Button>View products</Button>)
  .add("With background", () => <Button bg="#fa4785">View products</Button>);
