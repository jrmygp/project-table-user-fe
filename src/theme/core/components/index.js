import Button from "./Button";
import { merge } from "lodash";

const ComponentsOverrides = (theme) => {
  return merge(Button(theme));
};

export default ComponentsOverrides;
