import '../styles/global.css'
import Footer from "../components/Layout/Footer"
import NavBar from "../components/Layout/Navbar"
import Particles from "../components/Particles"
import useMode from "../hooks/useMode"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const App = ({ Component, pageProps }) => {
  
  const { theme, mode, toggleMode} = useMode()
  return (
    <>
    {/* body */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles />
      <NavBar toggleMode={toggleMode} mode={mode} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
    </>
  ) 
}

export default App
