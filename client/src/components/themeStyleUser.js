import {createTheme } from '@material-ui/core/styles';


const theme = createTheme ({
	palette: {
		primary: {
			main: '#212121',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#ff0080',
			contrastText: '#ffffff',
		},
		background: {
			default: '#ffffff',
		},
	},
	typography: {
		fontFamily: 'Baloo Tammudu 2',
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				a: {
					textDecoration: 'none',
					listStyle: 'none',
					color: '#000000',
					fontWeight: 'bold',
					'&:hover': {
						color: 'rgb(0, 178, 88)',
					},
				},
			},
		},
	},
});

export default theme;
