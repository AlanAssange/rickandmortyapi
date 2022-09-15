import React from 'react'
import { Button } from '@mui/material';
import { Container } from '@mui/system';

export const LoginPage: React.FC<{}> = () => {


    return(
        <Container sx={{mt: 9}} maxWidth="xl">
        <Button fullWidth variant="contained">Hello World LOGEEN</Button>
      </Container>

    )
}