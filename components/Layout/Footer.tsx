import GoTopButton from "../goTopButton";
import { Box, Typography, Link } from "@mui/material/";
import { useTheme } from "@mui/material";

const Footer = () => {
    const { palette } = useTheme()
    const { primary, secondary } = palette
    const color = palette.mode === "dark"

    return (
        <>
            {/* <GoTopButton /> */}
            <Box
                component="footer"
                sx={{
                    py: 5,
                    mt: 4,
                    // bgcolor: (color ? secondary.light : primary.light),
                }}
            >
                <Typography
                    variant="body1"
                    align="center"
                    color={!color
                        ? primary.main
                        : primary.contrastText}
                    sx={{ fontWeight: 700 }}
                >
                    {"© "}
                    <Link color="inherit" target="_blank"
                        href="https://www.linkedin.com/in/ibrahim-cardozo/">
                        Xavier Ibrahim Cardozo
                    </Link>
                    {" "}
                    {new Date().getFullYear()}.
                </Typography>
            </Box>
        </>
    );
}
export default Footer