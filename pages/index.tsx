import Home from "./home";
import About from "./aboutMe";
import Portfolio from "./portfolio";
import ContactMe from "./contactMe";
import GoTopButton from "../components/goTopButton";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const Index = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement.scrollTop;
      // console.log(scrolled);
      
      if (scrolled >= 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);

  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <ContactMe />
      <Box
        sx={{
          position: "fixed",
          bottom: "4.5rem",
          right: "2rem", zIndex: 3,
          display: isTop ? "none" : ""
        }}
      >
        <GoTopButton />
      </Box>
    </>
  );
};

export default Index;
