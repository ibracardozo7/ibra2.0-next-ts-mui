import { useState } from "react";
import { createTheme } from '@mui/material';
import { cyan, deepPurple } from '@mui/material/colors';

const useMode = () => {

    const blueGrey = deepPurple
    const cyan = deepPurple
    const [mode, setMode] = useState(false)
    const toggleMode = () => setMode(!mode)
    const colorBar = mode ? cyan[500] : blueGrey[500]
    const colorInput = mode ? blueGrey[900] : blueGrey[50]
    const colorBarHover = mode ? cyan[700] : blueGrey[700]
    const theme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
            primary: blueGrey,
            secondary: {
                main: "#673ab7"
            },
            error: {
                main: colorBar
            },
            background: {
                default: mode ? "#191627" : "#ede7f6"
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    html {
                        scroll-behavior: smooth;
                        -webkit-scroll-behavior: smooth;
                        scrollbar-color: ${colorBar} transparent;
                        scrollbar-width: thin;
                    }
                    ::-webkit-scrollbar {
                        width: 7.5px;
                    }
                    ::-webkit-scrollbar-track {
                        background: transparent; 
                    }
                    ::-webkit-scrollbar-thumb {
                        background: ${colorBar};
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background: ${colorBarHover};
                    }
                `,
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        '&:-webkit-autofill': {
                            'WebkitBoxShadow': `0 0 0 100px ${colorInput} inset`,
                        }
                    }
                }
            },
        },
    });

    return {
        mode,
        toggleMode,
        theme
    }
}

export default useMode