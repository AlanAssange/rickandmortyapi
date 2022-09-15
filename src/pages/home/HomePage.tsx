import React from 'react'
import { Button } from '@mui/material';
import { Container } from '@mui/system';

export const HomePage: React.FC<{}> = () => {


    return(
        <Container sx={{mt: 9}} maxWidth="xl">
        <Button fullWidth variant="contained">Hello World HOMEPAGE</Button>
      </Container>

    )
}