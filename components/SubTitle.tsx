import { styled, useTheme } from "@mui/material/styles"
import Typography, { TypographyProps } from "@mui/material/Typography"

interface Props {
  title: string
  left?: boolean
}

const SubTitle = ({title, left}: Props) => {
  
  const { palette } = useTheme()
  const { primary, secondary } = palette
  const mode = palette.mode === "dark"

  const CustomTitle = styled(Typography)<TypographyProps>(() => ({
    color: mode ? "#f2f1f3" : "#7e57c2",
    fontSize: `1.1rem`,
    fontWeight:"bold",
    fontFamily: "Poppins",
    letterSpacing: "1.5px"
}))

  return (
    <CustomTitle textAlign="center">{title}</CustomTitle>
  )
}

export default SubTitle