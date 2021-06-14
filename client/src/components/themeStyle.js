import {createMuiTheme} from '@material-ui/core/styles';
import {createTheme} from '@material-ui/data-grid';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#212121',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#00ff7f',
			contrastText: '#ffffff',
		},
		background: {
			default: '#ffffff',
		},
	},
	typography: {
		fontFamily: 'Baloo Tammudu 2',
	},
});

export default theme;
