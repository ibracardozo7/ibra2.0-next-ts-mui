import { Box, Button, Card, CardMedia, Container, Grid, useTheme } from "@mui/material"
import Title from "../components/Title"
import Link from "next/link"

const Home = () => {

    const { palette } = useTheme()

    return (
        <Box component="section" id="home">
            <Container
                sx={{
                    minHeight: "100vh",
                    display: "flex"
                }}
                maxWidth="md">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={9}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            py: 20,
                            // justifyContent: "center"
                        }}>
                            <Title
                            size={2}
                            title={[
                                "Hola! Mi nombre es ",
                                "Xavier Ibrahim Cardozo",
                                "y soy un ",
                                "Full Stack Developer",]}
                            />
                        </Grid>
                        <Grid 
                            item
                            container
                            xs={12}
                            md={3}
                            spacing={2}
                            // justifyContent="center"
                            >
                            <Grid item xs={12}
                                sx={{ display: "flex", alignItems: 'flex-end', justifyContent: "center"}}>
                                    <CardMedia image="/ibra.jpeg"
                                        component="img"
                                        alt=""
                                        sx={{
                                            width: {
                                                xs: "80%",
                                                sm: "40%",
                                                md: "100%",
                                            },
                                            objectFit: "cover",
                                            zIndex: 2,
                                            borderRadius: "50%",
                                            border: "3.5px solid cyan",
                                            marginBottom: {
                                                xs: "50px",
                                                md: "-50px"
                                            }
                                        }} />
                            </Grid>
                            <Grid container item xs={12} spacing={2} >
                                <Grid item xs={12}
                                    sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center" }}>
                                        <Link href="#portfolio">
                                        <Button
                                            fullWidth
                                            color={palette.mode !== 'dark'
                                            ? "primary" : "secondary"}
                                            variant="contained">
                                            Ver portafolio
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "center" }}>
                                    <Link href="#contactme">
                                        <Button
                                            fullWidth
                                            color={palette.mode !== 'dark'
                                                ? "primary" : "secondary"}
                                            variant="outlined">
                                            Ver contactos
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Home