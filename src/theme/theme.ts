import { createTheme } from '@mui/material/styles';
import { teal, pink } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: teal,
        secondary: pink
    },
    typography: {
        fontFamily: 'Poppins, sans-serif'
    }
});

export default theme