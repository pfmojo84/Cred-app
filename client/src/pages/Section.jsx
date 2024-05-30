import * as React from 'react';
import Box from  '@mui/material/Box';
import { Container } from '@mui/material';


function Section () {
    return (
        <Container maxWidth="sm">
            <Box
            sx={{
                p: 1,
                border: 1,
                borderColor: (theme: Theme) => theme.palette.primary.main,
            }}
            >
                Border color with theme value.
            </Box>
        </Container>
    )
}

export default Section