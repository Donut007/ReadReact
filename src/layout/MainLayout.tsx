import { Box, Card, CardContent } from "@mui/material"
import AppBarTop from "../components/AppBarTop"
import { Outlet } from "react-router-dom"
import HeaderTop from "../components/HeaderTop"
import AppBarFooter from "../components/AppBarFooter"

function MainLayout() {

    return (
        <>
            <AppBarTop />
            <HeaderTop />
            <Box sx={{ gap: 2,margin: 2, display: 'flex', flexDirection: 'column' }}>
                <Card>
                    <CardContent sx={{height:"100vh"}}>
                        <Outlet />
                    </CardContent>
                </Card>
                {/* <Card>
                    <CardContent>
                        
                    </CardContent>
                </Card> */}
            </Box>
            <AppBarFooter />
        </>
    )
}
export default MainLayout