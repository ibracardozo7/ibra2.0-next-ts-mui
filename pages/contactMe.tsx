import { Box, Card, CardActions, CardContent, Container, Grid, IconButton, Link, Typography, useTheme } from "@mui/material"
import { networks } from "../components/Consts";
import Title from "../components/Title";

const ContactMe = () => {

    const { palette } = useTheme();
    const mode = palette.mode === "dark";
    return (
        <Box
            component="section"
            id="contactme"
            sx={{
                py: 10,
                px: 2,
            }}>
            <Container maxWidth="sm">
                <Grid
                    container
                    direction="column"
                    spacing={4}>
                    <Grid item>
                        <Title title="Contactame" size={2.5} />
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography textAlign="center">
                                Puedes encontrarme en mis otras redes:
                                </Typography>
                            </CardContent>
                            <CardActions sx={{
                                justifyContent: "center"
                            }}>
                                {
                                networks.map(elem => {
                                    return (
                                        <Link
                                            key={elem.name}
                                            href={elem.url}
                                            target="_blank"
                                            title={elem.name}>
                                            <IconButton
                                                size="large"
                                                color={mode ? "secondary" : "primary"}>
                                                {elem.icon}
                                            </IconButton>
                                        </Link>
                                    )
                                })
                                }
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ContactMe