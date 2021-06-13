import { createMuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/data-grid';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff00c8',
      contrastText: '#fff',
    },
    background: {
        default: "white"
      }
  },
});

export default theme;