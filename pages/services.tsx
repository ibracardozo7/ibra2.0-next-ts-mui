import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { services } from "../components/Consts";
import { HiArrowRight } from "react-icons/hi";
import { SlGraduation } from "react-icons/sl";

const Services = () => {
  const { palette } = useTheme();
  const mode = palette.mode === "dark";

  return (
    <Box
      component="section"
      id="services"
      sx={{
        pt: 10,
        pb: 14,
        px: 2,
      }}
    >
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={6}
        >
          {/* Calificacion */}
          <Grid container item spacing={4} justifyContent="center">
            <Grid item xs={12} md={12} alignItems="center">
              <Title title="Calificación" size={2.5} />
              <SubTitle title="mi viaje personal" />
              <Typography
                textAlign="center"
                variant="h4"
                sx={{
                  color: mode ? "#f2f1f3" : "#7e57c2",
                  fontWeight: "600",
                  marginTop: "4rem",
                }}
              >
                <Button
                  variant="text"
                  size="large"
                  sx={{ fontWeight: "600" }}
                  startIcon={<SlGraduation />}
                >
                  Educación
                </Button>
              </Typography>
            </Grid>
            <Grid
              item
              // xs={12}
              // md={12}
              justifyContent="center"
            >
              <Box sx={{ display: "flex", marginBottom: "4.5rem" }}>
                <Box
                  sx={{
                    mt: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: mode ? "#f2f1f3" : "#242329"}}
                    variant="h6">Full Stack Developer</Typography>
                    <Typography 
                      sx={{ color: mode ? "#bcbac4" : "#6d6a7c"}}
                    variant="subtitle1">Henry</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#a19fad" }}>
                      Julio 2022 - Diciembre 2022
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: "2rem",
                    width: {
                      xs: "3px",
                      md: "200px",
                    },
                    marginLeft: "1.5rem",
                    borderLeft: `2px solid ${mode ? "#6e57e0" : "#7e57c2"}`,
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>

          {/* Services */}
          <Grid container item spacing={9} justifyContent="center">
            <Grid item xs={12} md={12} alignItems="center">
              <Title title="Servicios" size={2.5} />
              <SubTitle title="lo que ofrezco" />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={12}
              spacing={6}
              justifyContent="center"
            >
              {services.map((elem) => (
                <Grid key={elem.title} item>
                  <Card
                    variant="elevation"
                    sx={{
                      width: "340px",
                      height: "340px",
                      backgroundColor: mode ? "#191627" : "#d5cae9",
                      padding: "1.5rem",
                    }}
                  >
                    <CardContent sx={{ marginTop: "3rem" }}>
                      <IconButton
                        size="large"
                        sx={{ margin: "2rem 0rem", padding: "0px" }}
                      >
                        {elem.icon}
                      </IconButton>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "600" }}
                        color={
                          palette.mode !== "dark" ? "primary" : "secondary"
                        }
                      >
                        {elem.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="text" endIcon={<HiArrowRight />}>
                        Ver mas
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
