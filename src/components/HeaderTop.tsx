import { Box, Typography } from '@mui/material'
import { useMatches } from 'react-router-dom';

function HeaderTop() {
    const matches = useMatches();
    const current = matches.find((m) => (m.handle as { title?: string } | undefined)?.title);

    return (
        <Box sx={{ textAlign: 'center', marginBottom: 2,backgroundColor:'secondary.main',color:'text.secondary',padding:10}}>
            <Typography variant="h3" component="div" sx={{fontSize:50,color:"#ffffff"}}>
                {(current?.handle as { title?: string } | undefined)?.title || 'Welcome'}
            </Typography>
        </Box>
    )
}

export default HeaderTop