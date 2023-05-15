import { styled, useTheme } from "@mui/material/styles"
import Typography, { TypographyProps } from "@mui/material/Typography"

interface Props {
    title: string | string[];
    size: number;
    left?: boolean
}
const Title = ({ title, size, left}: Props) => {

    const { palette } = useTheme()
    const { primary, secondary } = palette
    const mode = palette.mode === "dark"

    const CustomTitle = styled(Typography)<TypographyProps>(() => ({
        color: mode ? "#f2f1f3" : primary.main,
        fontSize: `${size}rem`,
        fontWeight:"bold",
        fontFamily: "Poppins",
        letterSpacing: "1.5px"
    }))
    if (typeof title === "string") {
        return (
            <CustomTitle textAlign={left ? "left" : "center"}>{title}</CustomTitle>
        )
    }
    else {
        return (
            <Typography component="span" textAlign="left">
                {
                    title.map((str, i) => {
                        if (i % 2 !== 1) {
                            return (
                                <Typography
                                    key={str}
                                    component="span"
                                    sx={{
                                        fontSize: `${size}rem`,
                                        fontFamily: "Poppins"
                                    }}>
                                    {str}
                                </Typography>
                            )
                        }
                        else {
                            return (
                                <CustomTitle key={str}>{str}</CustomTitle>
                            )
                        }
                    })
                }
            </Typography>
        )
    }
}

export default Title