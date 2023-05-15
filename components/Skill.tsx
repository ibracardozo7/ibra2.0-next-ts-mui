import Icon, { IconProps } from "@mui/material/Icon";
import { styled, useTheme } from "@mui/material/styles";

interface Props {
    icon: JSX.Element;
    name: string
}
const Skill = ({ icon, name }: Props) => {

    const { palette } = useTheme()
    const { primary, secondary } = palette
    const mode = palette.mode === "dark"

    const CustomIcom = styled(Icon)<IconProps>(() => ({
        minWidth: "5rem",
        minHeight: "5rem",
        fontSize: "3rem",
        position: "relative",
        display: "flex",
        color: mode ? secondary.contrastText : primary.contrastText,
        background: `linear-gradient(90deg, ${mode ? secondary.dark : primary.dark} 0%, ${mode ? secondary.main : primary.main} 100%)`,
        border: "none",
        borderRadius: "100px",
        boxShadow: `0px 0px 18px ${mode ? secondary.dark : primary.dark}`,
        transition: "all 0.2s ease-in-out 0s",
        outline: "none",
        // padding: "12px",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
        "&:hover": {
            color: !mode ? secondary.contrastText : primary.contrastText,
            transform: "translateY(-8px)",
            background: `linear-gradient(90deg, ${!mode ? secondary.dark : primary.dark} 0%, ${!mode ? secondary.main : primary.main} 100%)`,
            boxShadow: `0px 0px 24px ${!mode ? secondary.dark : primary.dark}`,
        },
        "svg": {
            zIndex: 2
        },
    }));

    return (
        <CustomIcom title={name}>{icon}</CustomIcom>
    )
}

export default Skill