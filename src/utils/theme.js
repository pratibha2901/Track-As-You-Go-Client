import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  
} from "@material-ui/core/styles";
const theme=createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    type: "dark",
    primary: {
      light: "#9932CC",
      main: "#800080",
      dark: "#00ABE1",
      contrastText: "#fff",
    },
    secondary: {
      dark: "#161F6D",
      light: "#32CD32",
      main: "#008000",
      contrastText: "#fff",
    },
  },
});
export default theme
