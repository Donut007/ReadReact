import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import "./AppBarTop.css"

function AppBarTop() {
    const pages = [
        { name: "Review", title: "Review", link: "/Review" },
        // { name: "Profile", title: "Profile", link: "/Profile" }
        ];

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" key="HomePage" href="/" variant="outlined" sx={{backgroundColor:"white"}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Donut's Workshop
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 2 }}>
                    {pages.map((page) => (
                        <Button className="nav-button" color="inherit" key={page.name} href={page.link}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1,textTransform:'none' }}>
                                {page.title}
                            </Typography>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarTop