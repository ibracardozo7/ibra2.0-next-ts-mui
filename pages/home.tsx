import {
  Box,
  Button,
  IconButton,
  CardMedia,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Title from "../components/Title";
import Link from "next/link";
import { networks } from "../components/Consts";
import Typing from "react-typing-effect";

const Home = () => {
  const { palette, breakpoints } = useTheme();
  const { primary, secondary } = palette;
  const isMobile = useMediaQuery(breakpoints.down("md"));
  const mode = palette.mode === "dark";

  return (
    <Box component="section" id="home">
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          fontFamily: "Poppins",
          // border: "1px solid black"
        }}
        maxWidth="md"
      >
        <Grid container
          gap={{
            md: 3
          }}
        >
          {
              isMobile && (
            <Grid
              item
              xs={12}
              md={3.5}
              justifyContent="center"
              alignItems="center"
              sx={{ display: "flex", mt: { xs: "90px", md: "0px" } }}
            >
              <CardMedia
                image="/ibra.jpeg"
                component="img"
                alt=""
                sx={{
                  width: {
                    xs: "65%",
                    sm: "50%",
                    md: "90%",
                  },
                  objectFit: "cover",
                  zIndex: 2,
                  borderRadius: "50%",
                  boxShadow: `0px 0px 50px 10px ${
                    mode ? secondary.dark : primary.dark
                  }`,
                }}
              />
            </Grid>
            )
          }
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: {
                xs: "25px",
                md: "0px",
              },
              // py: 20,
              // justifyContent: "center"
            }}
          >
            <Title
              size={2}
              title={[
                "Hola! Mi nombre es ",
                "Xavier Ibrahim Cardozo",
                // "y soy un ",
                // "Full Stack Developer",
              ]}
            />
            <Grid container item>
              <Grid item xs={12} md={2.8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "2rem",
                    // mr: "15px"
                    fontFamily: "Poppins",
                  }}
                >
                  y soy un
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  component="span"
                  sx={{
                    color: mode ? secondary.main : primary.main,
                    // textShadow: `0px 0px 0px ${mode ? secondary.main : primary.light},
                    // 0px 0px 0px ${mode ? secondary.main : primary.light},
                    // 0px 0px 8px ${mode ? secondary.main : primary.light}`,
                    fontSize: `2rem`,
                    fontWeight: "bold",
                  }}
                >
                  <Typing
                    text={["Front End Developer", "Full Stack Developer"]}
                    speed={50}
                    eraseSpeed={100}
                    typingDelay={1000}
                    eraseDelay={2000}
                  />
                </Typography>
              </Grid>
            </Grid>
            <Box display="flex" gap="15px" my="10px">
              {networks.map((elem) => {
                return (
                  <Link
                    key={elem.name}
                    href={elem.url}
                    target="_blank"
                    title={elem.name}
                  >
                    <IconButton
                      sx={{
                        // border: `.15rem solid ${mode ? "#673ab7" : "#f1f1f1"}`,
                        color: mode ? "#f2f1f3" : "#673ab7",
                        p: "10px",
                      }}
                      size="medium"
                    >
                      {elem.icon}
                    </IconButton>
                  </Link>
                );
              })}
            </Box>

            <Button
              sx={{
                mt: {
                  xs: "25px",
                  md: "15px",
                },
                p: "1rem 2rem",
                width: {
                  xs: "60%",
                  md: "32%",
                },
                borderRadius: "4rem",
                boxShadow: `0 0 .8rem ${mode ? "#673ab7" : "#673ab7"}`,
                transition: ".8s ease",
              }}
              color={palette.mode !== "dark" ? "primary" : "secondary"}
              variant="contained"
              href="#portfolio"
            >
              Ver portafolio
            </Button>
          </Grid>
          {
            !isMobile && (
          <Grid
            item
            xs={12}
            md={3.5}
            justifyContent="center"
            alignItems="center"
            sx={{ display: "flex", mt: { xs: "50px", md: "0px" } }}
          >
            <CardMedia
              image="/ibra.jpeg"
              component="img"
              alt=""
              sx={{
                width: {
                  xs: "65%",
                  sm: "50%",
                  md: "100%",
                },
                objectFit: "cover",
                zIndex: 2,
                borderRadius: "50%",
                boxShadow: `0px 0px 50px 10px ${
                  mode ? secondary.dark : primary.dark
                }`,
              }}
            />
          </Grid>
            )
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
