import { Breadcrumbs, Link, Typography, Container, Box, Button } from "@mui/material";
import navsvg from '../assets/smalllogo.svg'
import Auth from '../utils/auth'


const Header =  () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    }
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
                <Breadcrumbs aria-label="breadcrumb">
                    
                    <Link underline="hover" color="inherit" href="/home">
                        <img src={navsvg}></img>
                    </Link>
                    {Auth.loggedIn() ? 
                        Auth.userType() ? (
                            <Link
                                underline="hover"
                                color="inherit"
                                onClick={logout}
                                href='/home'
                            >
                                Worker
                            </ Link>
                        ) : (
                            <Link
                                underline="hover"
                                color="inherit"
                                onClick={logout}
                                href='/home'
                            >
                                Employer
                            </Link>
                            ) : (
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href="/signIn"
                                >
                                    Sign In 
                                </Link>
                    )}
                </Breadcrumbs>
            </Box>
        </Container>
    )
}

export default Header;