// The themes default spacing is 4px, everything then multiplies by this value
// you can overide the base spacing to give you more nuanced control
// There is a mode option so you can switch between light and dark mode
// So you can them each, it automatically does have a theme so you cna use it

// Colors go from 900 - 50 then have accent colors A100, 200, 400, 700

import { brown, grey, blueGrey, red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";

const theme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#C49235"
    },
    secondary: {
      main: orange[500]
    },
    customRed: {
      main: red[500]
    },
    transGrey: {
      main: "rgba(12,12,13, 0.9)"
    }
  },
  typography: {
    customVariant: {
      fontSize: "6rem"
    }
  },
  spacing: 4
};

export default theme;
