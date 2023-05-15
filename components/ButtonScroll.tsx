import { Box } from "@mui/material";
import { useState, useEffect } from "react"
import GoTopButton from "./goTopButton";

const ButtonScroll = () => {
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
  )
}

export default ButtonScroll