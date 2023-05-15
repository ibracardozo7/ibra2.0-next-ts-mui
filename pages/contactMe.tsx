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
            <Title title="Contactame!" size={2.5} />
          </Grid>
          <Grid item>
            <Card 
            sx={{ backgroundColor: mode ? "#1f242d" : "#f1f1f1" }}
            >
              <CardContent>
                <Typography sx={{color: mode ? "#fff" : "#000000", fontWeight: "700", fontSize: "18px"}} textAlign="center">Ponerse en contacto</Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0",
                  gap: "10px",
                  paddingBottom: "18px"
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
                        width: "300px",
                        // justifyContent: "start",
                        // alignItems: "center",
                        textDecoration: "none",
                        gap: "10px"
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
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
