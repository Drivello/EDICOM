import { createMuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/data-grid';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00ff7f',
      contrastText: 'white',
    },
    background: {
      default: "black"
    },

  },
});

export default theme;