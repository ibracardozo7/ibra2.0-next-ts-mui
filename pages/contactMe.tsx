import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { networks, networks2 } from "../components/Consts";
import Title from "../components/Title";
import zIndex from "@mui/material/styles/zIndex";
import SubTitle from "../components/SubTitle";

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
      }}
    >
      <Container maxWidth="sm">
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Title title="Contáctame!" size={2.5} />
            <SubTitle title="Ponerse en contacto" />
          </Grid>
          <Grid item>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // margin: "0",
                  gap: "10px",
                  paddingBottom: "18px",
                  zIndex: 3,
                  margin: "1rem 0rem .5rem 0rem",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                {networks2.map((elem) => {
                  return (
                    <Link
                      key={elem.name}
                      href={elem.url}
                      target="_blank"
                      title={elem.name}
                      sx={{
                        display: "flex",
                        width: "100%",
                        // justifyContent: "flex-start",
                        // alignItems: "center",
                        textDecoration: "none",
                        gap: "10px",
                      }}
                      // style={{nth}}
                    >
                      <IconButton
                        size="large"
                        color={mode ? "secondary" : "primary"}
                      >
                        {elem.icon}
                      </IconButton>
                      <Box>
                        <Typography
                          sx={{
                            color: mode ? "#fff" : "#242329",
                            fontSize: "20px",
                          }}
                        >
                          {elem.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: mode ? "#fff" : "#9593a0",
                          }}
                        >
                          {elem.subname}
                        </Typography>
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
