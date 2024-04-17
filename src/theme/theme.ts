import { createTheme } from '@mui/material/styles';
import { teal, green } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: teal,
        secondary: green
    },
    typography: {
        fontFamily: 'Poppins, sans-serif'
    }
});

export default theme