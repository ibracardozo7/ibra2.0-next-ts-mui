import { Box, Container, Grid, useTheme } from "@mui/material"
import { myProjects } from "../components/Consts"
import Proyect from "../components/Proyect"
import Title from "../components/Title"

const Portfolio = () => {

    const {palette} = useTheme()
    const { primary, secondary } = palette
    const { mode } = palette

    return (
        <Box
            component="section"
            id="portfolio"
            sx={{
                minHeight: "100vh",
                py: "10",
                px: 2
            }}>
            <Container>
                <Grid
                    container
                    direction="column"
                    spacing={5}
                    >
                    <Grid item xs={12}>
                        <Title title="Portafolio" size={2.5} />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={12}
                        spacing={8}
                        justifyContent="center"
                        >
                        {
                        myProjects.map((elem, i) => (
                            <Grid
                                key={elem.title}
                                item
                                xs={12}
                                md={11}
                                >
                                <Proyect
                                description={elem.description}
                                image={elem.image}
                                languages={elem.lenguages}
                                title={elem.title}
                                demo={elem.demo}
                                github={elem.github}
                                row={i}
                                />
                            </Grid>
                        ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Portfolio