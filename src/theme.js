import { red, blueGrey, grey } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[900],
    },
    test: {
      primary: grey[900],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[50],
    },
  },
  typography: {
    h1: { fontFamily: "'Zilla Slab', serif" },
    h5: { fontFamily: "'Zilla Slab', serif" },
    subtitle1: { color: grey[700] },
  },
})

export default theme
