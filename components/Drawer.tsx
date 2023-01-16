import {
    Box,
    Divider,
    Drawer,
    FormControlLabel,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch
} from "@mui/material";
import {
    Close,
    LightMode as Sun,
    DarkMode as Moon,
} from "@mui/icons-material"

interface Route {
    name: string;
    link: string;
    icon: JSX.Element;
}
interface Props {
    routes: Route[];
    open: boolean;
    onClose: () => void;
    mode: boolean;
    toggleMode: () => void;
}

const NavigationDrawer = (props: Props) => {

    const { routes, open, onClose, mode, toggleMode } = props;

    return (
        <Drawer
            anchor="right"
            open={open}
            variant="temporary"
            onClose={onclose}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: { xs: 48, sm: 64}
                    }}>
                    <IconButton size="large" onClick={onClose} >
                        <Close color={mode ? "secondary" : "primary"} />
                    </IconButton>
                    <FormControlLabel
                        control={
                            <Switch
                            checked={mode}
                            onChange={toggleMode}
                            color='secondary' />}
                        label={mode
                            ? <Sun sx={{ display: 'flex' }} />
                            : <Moon sx={{ display: 'flex' }} />}
                        labelPlacement="start"
                        sx={{ paddingRight: 2, marginRight: 0 }} />
                </Box>
                <Divider />
                <List>
                    {
                        routes.map((elem) => (
                            <ListItem
                                key={elem.name}
                                button
                                onClick={onClose}
                                {...{ component: Link, href: elem.link}}>
                                <ListItemIcon>
                                    {elem.icon}
                                </ListItemIcon>
                                <ListItemText primary={elem.name}/>
                            </ListItem>
                        ))
                    }
                </List>
        </Drawer>
    )
}

export default NavigationDrawer