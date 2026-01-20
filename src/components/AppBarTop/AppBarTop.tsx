import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import "./AppBarTop.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import LoginModal from "../LoginModal";
import { getCurrentUser, signOut } from "../../Services/auth.service";
import LogoutIcon from '@mui/icons-material/Logout';

function AppBarTop() {
    const [isOpen_Login, setOpenLogin] = useState(false);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    
    const pages = [
        { name: "Review", title: "Review", link: "/Review" },
        // { name: "Profile", title: "Profile", link: "/Profile" }
    ];
    function fetchUser() {
        getCurrentUser().then(username => {
            setUser(username ? username : "");
        })
    }

    fetchUser();

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button color="inherit" key="HomePage" href="/" variant="outlined" sx={{ backgroundColor: "white" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Donut's Workshop
                            </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 2 }}>
                        {pages.map((page) => (
                            <Button className="nav-button" color="inherit" key={page.name} href={page.link}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'none' }}>
                                    {page.title}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>{user}</Typography>
                        <IconButton onClick={() => setOpenLogin(true)}>
                            <AccountCircleIcon sx={{ fontSize: 40, color: "black" }} />
                        </IconButton>
                        <IconButton onClick={() => {
                            signOut()
                            setUser("");
                        }}>
                            <LogoutIcon sx={{ fontSize: 40, color: "black" }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <LoginModal open={isOpen_Login} onClose={(isLogin) => {
                setOpenLogin(false);
                if (isLogin) {
                    getCurrentUser().then(username => {
                        setUser(username ? username : "");
                    })
                }

            }}></LoginModal>
        </>
    )
}

export default AppBarTop