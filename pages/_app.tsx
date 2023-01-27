import '../styles/global.css'
import Head from 'next/head'
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
    <Head>
      <title>Xavier Ibrahim Cardozo | Full Stack Web Developer</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="theme-color" content={mode ? theme.palette.secondary.main : theme.palette.primary.main} />
      <meta content="Un Full Stack Developer apasionado por la programación y en busca de nuevos retos" name="description" />
      <meta content="portfolio" name="keywords" />
      <meta content="Xavier Ibra Cardozo" name="author" />
      <link href="/i.png" rel="icon" />
      <meta key="ogimage" content="https://pngimg.com/uploads/letter_j/letter_j_PNG51.png" property="og:image" />
    </Head>
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
