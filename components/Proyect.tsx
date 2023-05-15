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
    row?: any
}

const Proyect = ({
    description,
    image,
    languages,
    title,
    demo,
    github,
    row
}: Project) => {

    const { palette } = useTheme();
    const mode = palette.mode === "dark"

    return (
        <Card
            sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                flexDirection: {
                    xs: "column",
                    sm: "",
                    md: row % 2 !== 1 ? "row" : "row-reverse"
                },
                backgroundColor: mode ? "#191627" : "#d5cae9",
                borderRadius: "20px"
            }}>
            <CardMedia
                image={image}
                component="img"
                alt={title}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "50%",
                        md: "50%",
                    },
                    // height: "100%",
                    objectFit: "cover",
                    zIndex: 2,
                }}
            />
            <CardContent
                sx={{
                    width: {
                        xs: "100%",
                        sm: "60%",
                        md: "50%",
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: 2,
                    padding: "25px 30px"
                }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{fontWeight: "600"}}
                    color={palette.mode !== "dark" ? "primary" : "secondary"}>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    gutterBottom>
                    {description}
                </Typography>
                <Grid container spacing={1} sx={{paddingTop: "8px"}}>
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
                            color={palette.mode !== "dark" ? "primary" : "secondary"}
                            size="small"
                            sx={{padding: "15px 10px"}}
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
                                variant="contained"
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