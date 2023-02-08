import { createTheme } from "@mui/material";
import palette from "./core/colors";
import typography from "./core/font";
import ComponentsOverrides from "./core/components";

const theme = createTheme({
  palette,
  typography,
});

theme.components = ComponentsOverrides(theme);

export default theme;
