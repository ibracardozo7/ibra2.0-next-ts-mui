import {
    Box,
    Button,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material"
import { ChevronRight, Description } from "@mui/icons-material";
import Title from "../components/Title";
import Skill from "../components/Skill";
import { aboutMe, techs } from "../components/Consts"
import Link from "next/link";

const AboutMe = () => {

    const { breakpoints, palette } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down("md"));
    const mode = palette.mode === "dark"
    
    return (
        <Box component="section" id="about"
            sx={{
                py: 10,
                px: 2
            }}>
            <Container>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    spacing={12}>
                    <Grid
                        container item spacing={4}>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            alignItems="center">
                            <Title title="Acerca de mi" size={2.5} />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            md={8}
                            spacing={2}
                            justifyContent="center">
                            <List disablePadding>
                                {
                                aboutMe.map(elem => {
                                    return (
                                        <ListItem key={elem}>
                                            <ListItemIcon>
                                                <ChevronRight
                                                    color={mode ? 'primary' : 'secondary'}
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary={elem} />
                                        </ListItem>
                                    )
                                })
                                }
                                <ListItem>
                                    <ListItemIcon>
                                    <ChevronRight
                                        color={mode ? 'primary' : 'secondary'}
                                    />
                                    </ListItemIcon>
                                    <Button 
                                        href="/ibracv.pdf"
                                        target="_blank"
                                        color={mode ? 'secondary' : 'primary'}
                                        size="large"
                                        variant="contained"
                                        sx={{p: ".5rem 2rem",
                                            borderRadius:"4rem",
                                            boxShadow: `0 0 .8rem ${mode ? "cyan" : "#607d8b"}`,
                                            transition: ".8s ease",
                                        }}
                                        endIcon={<Description />}>
                                        Descargar CV
                                    </Button>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container item spacing={4}>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            alignItems="center">
                            <Title title="Habilidades" size={2.5} />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            md={8}
                            spacing={3}
                            justifyContent="center">
                            {
                            techs.map((elem) => (
                                <Grid key={elem.name} item>
                                    {
                                    isMobile
                                    ? <Skill icon={elem.icon} name={elem.name} />
                                    : <Link href={elem.url} target="_blank" rel="noreferrer">
                                        <Skill icon={elem.icon} name={elem.name} />
                                    </Link> 
                                    }
                                </Grid>
                            ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutMe