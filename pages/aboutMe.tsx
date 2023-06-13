import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChevronRight, Description, ExpandMore } from "@mui/icons-material";
import Title from "../components/Title";
import Skill from "../components/Skill";
import {
  aboutMe,
  techs,
  techsBackEnd,
  techsDataBase,
  techsFrontEnd,
} from "../components/Consts";
import Link from "next/link";
import { useState } from "react";
import { FiCode } from "react-icons/fi";
import { HiOutlineDatabase } from "react-icons/hi";
import { BsFillHddNetworkFill } from "react-icons/bs";
import SubTitle from "../components/SubTitle";

const AboutMe = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { breakpoints, palette } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));
  const mode = palette.mode === "dark";

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
        px: 2,
      }}
    >
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={10}
        >
          {/* about Me */}
          <Grid container item spacing={5} justifyContent="center">
            <Grid item xs={12} md={12} alignItems="center">
              <Title title="Acerca de mi" size={2.5} />
              <SubTitle title="Mi introducción" />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={9}
              spacing={2}
              justifyContent="center"
              sx={{marginTop: ".3rem"}}
            >
              <Grid
                item
                xs={11}
                md={5}
                justifyContent="center"
                alignItems="center"
                sx={{
                  display: "flex",
                  // mt: {xs:"40px",md: "0px"}
                }}
              >
                <CardMedia
                  image="/aboutibra.png"
                  component="img"
                  alt=""
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={7}>
                <List disablePadding>
                  {aboutMe.map((elem) => {
                    return (
                      <ListItem key={elem} sx={{width: "100%"}}>
                        <ListItemText sx={{marginLeft: "5px"}} primary={elem} />
                      </ListItem>
                    );
                  })}
                  <ListItem>
                    <Box
                      sx={{
                        // marginLeft: "50px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ width: "100px" }}>
                        <Typography textAlign="center" fontWeight="700">
                          9+
                        </Typography>
                        <Typography textAlign="center">
                          Meses de Experiencia
                        </Typography>
                      </Box>
                      <Box sx={{ width: "100px" }}>
                        <Typography textAlign="center" fontWeight="700">
                          8+
                        </Typography>
                        <Typography textAlign="center">
                          Proyectos terminados
                        </Typography>
                      </Box>
                      <Box
                        sx={{ width: "150px", display: isMobile ? "none" : "" }}
                      >
                        <Typography textAlign="center" fontWeight="700">
                          Buscando
                        </Typography>
                        <Typography textAlign="center">
                          equipo para aprender y crecer
                        </Typography>
                      </Box>
                    </Box>
                  </ListItem>
                  <ListItem sx={{ display: !isMobile ? "none" : "", marginTop: "10px" }}>
                    <Box sx={{ width: "100%" }}>
                      <Typography textAlign="center" fontWeight="700">
                        Buscando
                      </Typography>
                      <Typography textAlign="center">
                        equipo para aprender y crecer
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem sx={{ marginLeft: "0px", marginTop: "15px", display: "flex", justifyContent: "center" }}>
                    <Button
                      href="/XavierIbrahimCardozo-FullStack-CV.pdf"
                      target="_blank"
                      color={mode ? "secondary" : "primary"}
                      size="large"
                      variant="contained"
                      sx={{
                        p: ".6rem 2rem",
                        borderRadius: ".7rem",
                        boxShadow: `0 0 .8rem ${mode ? "#673ab7" : "#607d8b"}`,
                        transition: ".8s ease",
                      }}
                      endIcon={<Description />}
                    >
                      Descargar CV
                    </Button>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          {/* Skill */}
          {/* <Grid container item spacing={4} justifyContent="center">
            <Grid item xs={12} md={12} alignItems="center">
              <Title title="Habilidades" size={2.5} />
              <SubTitle title="mi nivel tecnico" />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={7}
              spacing={3}
              justifyContent="center"
              sx={{marginTop: "1rem"}}
            >
              {techs.map((elem) => (
                <Grid key={elem.name} item>
                  {isMobile ? (
                    <Skill icon={elem.icon} name={elem.name} />
                  ) : (
                    <Link href={elem.url} target="_blank" rel="noreferrer">
                      <Skill icon={elem.icon} name={elem.name} />
                    </Link>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
