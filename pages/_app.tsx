import * as React from "react"
import "../styles/global.css"
import Head from 'next/head'
import { AppProps } from "next/app"
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "../src/createEmotionCache"
import NavBar from "../components/Layout/Navbar"
import Particles from "../components/Particles"
import useMode from "../hooks/useMode"

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  
  const { theme, mode, toggleMode} = useMode()
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <title>Xavier Ibrahim Cardozo | Full Stack Web Developer</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="theme-color" content={mode ? theme.palette.secondary.main : theme.palette.primary.main} />
      <meta content="Un Full Stack Developer apasionado por la programación y en busca de nuevos retos" name="description" />
      <meta content="portfolio" name="keywords" />
      <meta content="Xavier Ibra Cardozo" name="author" />
      <link href="/i.png" rel="icon" />
    </Head>
    {/* body */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles />
      <NavBar toggleMode={toggleMode} mode={mode} />
      <Component {...pageProps} />
    </ThemeProvider>
    </CacheProvider>
  ) 
}

export default App
