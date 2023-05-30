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
                      <ListItem key={elem}>
                        <ListItemText sx={{marginLeft: "50px"}} primary={elem} />
                      </ListItem>
                    );
                  })}
                  {/*  */}
                  <ListItem>
                    <Box
                      sx={{
                        marginLeft: "50px",
                        display: "flex",
                        justifyContent: {
                          xs: "space-between",
                          md: "space-around",
                        },
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
                  <ListItem sx={{ display: !isMobile ? "none" : "" }}>
                    <Box sx={{ width: "100%" }}>
                      <Typography textAlign="center" fontWeight="700">
                        Buscando
                      </Typography>
                      <Typography textAlign="center">
                        equipo para aprender y crecer
                      </Typography>
                    </Box>
                  </ListItem>
                  {/*  */}
                  <ListItem sx={{ marginLeft: "50px", marginTop: "10px" }}>
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
          <Grid container item spacing={4} justifyContent="center">
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
            {/* Accordion off */}
            {/* <Grid
              container
              item
              xs={12}
              md={12}
              spacing={2}
              justifyContent="center"
            >
              <Grid item xs={12} md={4.5}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{ backgroundColor: mode ? "#323946" : "#f2f0f0" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel2bh-header"
                    sx={{
                      height: "48px",
                    }}
                  >
                    <IconButton
                      color={mode ? "secondary" : "primary"}
                      sx={{ marginRight: "5px" }}
                    >
                      <FiCode />
                    </IconButton>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Frontend Developer
                    </Typography>
                  </AccordionSummary>
                  {techsFrontEnd.map((elem) => (
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                      key={elem.name}
                    >
                      {isMobile ? (
                        <Skill icon={elem.icon} name={elem.name} />
                      ) : (
                        <Link href={elem.url} target="_blank" rel="noreferrer">
                          <Skill icon={elem.icon} name={elem.name} />
                        </Link>
                      )}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>{elem.name}</Typography>
                          <Typography color={mode ? "#fff" : "#242329"}>
                            % {elem.progress}
                          </Typography>
                        </Box>
                        <LinearProgress
                          sx={{
                            height: "6.5px",
                            width: {
                              xs: "200px",
                              lg: "250px",
                            },
                            margin: "5px 0px 5px 0px",
                          }}
                          color={mode ? "secondary" : "primary"}
                          variant="determinate"
                          value={elem.progress}
                        ></LinearProgress>
                      </Box>
                    </AccordionDetails>
                  ))}
                </Accordion>
              </Grid>

              <Grid item xs={12} md={4.5}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{ backgroundColor: mode ? "#323946" : "#f2f0f0" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{
                      height: "48px",
                    }}
                  >
                    <IconButton
                      color={mode ? "secondary" : "primary"}
                      sx={{ marginRight: "5px" }}
                    >
                      <BsFillHddNetworkFill />
                    </IconButton>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Backend Developer
                    </Typography>
                  </AccordionSummary>
                  {techsBackEnd.map((elem) => (
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                      key={elem.name}
                    >
                      {isMobile ? (
                        <Skill icon={elem.icon} name={elem.name} />
                      ) : (
                        <Link href={elem.url} target="_blank" rel="noreferrer">
                          <Skill icon={elem.icon} name={elem.name} />
                        </Link>
                      )}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>{elem.name}</Typography>
                          <Typography color={mode ? "#fff" : "#242329"}>
                            % {elem.progress}
                          </Typography>
                        </Box>
                        <LinearProgress
                          sx={{
                            height: "6.5px",
                            width: {
                              xs: "200px",
                              lg: "250px",
                            },
                            margin: "5px 0px 5px 0px",
                          }}
                          color={mode ? "secondary" : "primary"}
                          variant="determinate"
                          value={elem.progress}
                        ></LinearProgress>
                      </Box>
                    </AccordionDetails>
                  ))}
                </Accordion>
              </Grid>

              <Grid item xs={12} md={4.5}></Grid>
              <Grid item xs={12} md={4.5}>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{ backgroundColor: mode ? "#323946" : "#f2f0f0" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{
                      height: "48px",
                    }}
                  >
                    <IconButton
                      color={mode ? "secondary" : "primary"}
                      sx={{ marginRight: "5px" }}
                    >
                      <HiOutlineDatabase />
                    </IconButton>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Database
                    </Typography>
                  </AccordionSummary>
                  {techsDataBase.map((elem) => (
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                      key={elem.name}
                    >
                      {isMobile ? (
                        <Skill icon={elem.icon} name={elem.name} />
                      ) : (
                        <Link href={elem.url} target="_blank" rel="noreferrer">
                          <Skill icon={elem.icon} name={elem.name} />
                        </Link>
                      )}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>{elem.name}</Typography>
                          <Typography color={mode ? "#fff" : "#242329"}>
                            % {elem.progress}
                          </Typography>
                        </Box>
                        <LinearProgress
                          sx={{
                            height: "6.5px",
                            width: {
                              xs: "200px",
                              lg: "250px",
                            },
                            margin: "5px 0px 5px 0px",
                          }}
                          color={mode ? "secondary" : "primary"}
                          variant="determinate"
                          value={elem.progress}
                        ></LinearProgress>
                      </Box>
                    </AccordionDetails>
                  ))}
                </Accordion>
              </Grid> */}
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
