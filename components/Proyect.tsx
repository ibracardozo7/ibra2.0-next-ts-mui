import { Button, Card, CardContent, CardMedia, Chip, Grid, Typography, useTheme } from "@mui/material";
import { SiGithub } from "react-icons/si";
import { Visibility } from "@mui/icons-material";

interface Project {
    description: string;
    image: string;
    languages: string[];
    title: string;
    demo: string;
    github: string;
}

const Proyect = ({
    description,
    image,
    languages,
    title,
    demo,
    github,
}: Project) => {

    const { palette } = useTheme();
    const mode = palette.mode === "dark"
    // const cardDirection = direction ? "row"

    return (
        <Card
            
            sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                flexDirection: {
                    xs: "column",
                    sm: "",
                    md: "column"
                },
                backgroundColor: mode ? "#323946": "#f2f0f0",
            }}>
            <CardMedia
                image={image}
                component="img"
                alt={title}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "40%",
                        md: "100%",
                    },
                    objectFit: "cover",
                    zIndex: 2,
                }}
            />
            <CardContent
                sx={{
                    width: {
                        xs: "100%",
                        sm: "60%",
                        md: "100%",
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: 2
                }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    color={palette.mode !== "dark" ? "primary" : "secondary"}>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    gutterBottom>
                    {description}
                </Typography>
                <Grid container spacing={1}>
                    <Grid
                    container
                    item
                    xs={7}
                    md={8.5}
                    spacing={1}
                    >
                        {
                        languages.map((elem) =>
                        <Grid
                            key={elem}
                            item
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                            <Chip
                            label={elem}
                            color={palette.mode === "dark" ? "primary" : "secondary"}
                            size="small"
                            />
                        </Grid>)
                        }
                    </Grid>
                    <Grid
                        container
                        item
                        xs={5}
                        md={3.5}
                        direction="column"
                        spacing={2}>
                        <Grid item>
                            <Button
                                href={github}
                                target="_blank"
                                fullWidth
                                color={palette.mode !== "dark" ? "primary" : "secondary"}
                                variant="contained"
                                startIcon={<SiGithub />}>
                                Repo
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                href={demo}
                                target="_blank"
                                fullWidth
                                color={palette.mode !== "dark" ? "primary" : "secondary"}
                                variant="outlined"
                                startIcon={<Visibility />}>
                                Demo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Proyect