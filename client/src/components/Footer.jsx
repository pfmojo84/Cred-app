import { Container, Box } from "@mui/material"
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <Container sx={{ marginY: 1 }} component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
             >
            <img src={logo}></img>
            </Box>
        </Container>
    )
}

export default Footer;