import { Box, Button, IconButton, CardMedia, Container, Grid, useTheme, useMediaQuery, Typography } from "@mui/material"
import Title from "../components/Title"
import Link from "next/link"
import { networks } from "../components/Consts"
import Typing from "react-typing-effect"

const Home = () => {

    const { palette, breakpoints } = useTheme()
    const { primary, secondary } = palette
    const isMobile = useMediaQuery(breakpoints.down("md"));
    const mode = palette.mode === "dark"

    return (
        <Box component="section" id="home">
            <Container
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    // border: "1px solid black"
                }}
                maxWidth="md">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            marginTop: {
                                xs: "75px",
                                md:"0px"
                            }
                            // py: 20,
                            // justifyContent: "center"
                        }}>
                            <Title
                            size={2}
                            title={[
                                "Hola! Mi nombre es ",
                                "Xavier Ibrahim Cardozo",
                                // "y soy un ",
                                // "Full Stack Developer",
                            ]}
                            />
                            <Grid
                                container
                                item
                            >
                                <Grid item
                                    xs={12}
                                    md={2.8}
                                >
                                <Typography
                                component="span"
                                sx={{
                                    fontSize: "2rem",
                                    mr: "15px"
                                }}>
                                    y soy un 
                                </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={8}
                                >
                                <Typography
                                    component="span"
                                    sx={{
                                        color: mode ? secondary.main : primary.main,
                                        textShadow: `0px 0px 0px ${mode ? secondary.main : primary.light},
                                        0px 0px 0px ${mode ? secondary.main : primary.light},
                                        0px 0px 10px ${mode ? secondary.main : primary.light}`,
                                        fontSize: `2rem`,
                                        fontWeight:"bold"
                                    }}
                                >
                                    <Typing 
                                    text={["Front End Developer","Full Stack Developer"]}
                                    speed={50}
                                    eraseSpeed={100}
                                    typingDelay={1000}
                                    eraseDelay={2000}
                                    />
                                </Typography>
                                </Grid>
                            </Grid>
                            <Box
                                display="flex"
                                gap="10px"
                                my="10px"
                            >
                            {
                                networks.map(elem => {
                                    return (
                                        <Link
                                            key={elem.name}
                                            href={elem.url}
                                            target="_blank"
                                            title={elem.name}>
                                            <IconButton
                                                sx={{
                                                    border: `.15rem solid ${mode ? "cyan" : "#607d8b"}`,
                                                    p:"10px"}}
                                                size="small"
                                                color={mode ? "secondary" : "primary"}>
                                                {elem.icon}
                                            </IconButton>
                                        </Link>
                                    )
                                })
                                }
                            </Box>
                            
                                <Button
                                    sx={{
                                        mt: {
                                            xs: "25px",
                                            md: "15px"
                                        },
                                        p: "1rem 2.8rem",
                                        width: {
                                            xs: "60%",
                                            md: "34.5%",
                                        },
                                        borderRadius:"4rem",
                                        boxShadow: `0 0 .8rem ${mode ? "cyan" : "#607d8b"}`,
                                        transition: ".8s ease"
                                    }}
                                    color={palette.mode !== 'dark'
                                    ? "primary" : "secondary"}
                                    variant="contained">
                                        <Link href="#portfolio">
                                    Ver portafolio
                                        </Link>
                                </Button>
                        </Grid>
                        <Grid item xs={12} md={4}
                        // spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ display: "flex", mt: {xs:"20px",md: "0px"}}}>
                            <CardMedia image="/ibra.jpeg"
                                component="img"
                                alt=""
                                sx={{
                                    width: {
                                        xs: "80%",
                                        sm: "40%",
                                        md: "90%",
                                    },
                                    objectFit: "cover",
                                    zIndex: 2,
                                    borderRadius: "50%",
                                    border: `2px solid ${mode ? "cyan" : "#607d8b"}`,
                                    boxShadow: `0px 0px 50px 2px ${mode ? secondary.dark : primary.dark}`,
                                }} />
                        </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Home