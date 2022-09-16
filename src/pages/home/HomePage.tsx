import React from 'react'
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useNotification } from '../../context/notification.context';

export const HomePage: React.FC<{}> = () => {
  const {getError} = useNotification()
  const handleClick = () => {
    getError("WUBBA LUBBA DUB DUB")
  }
  

    return(
        <Container sx={{mt: 9}} maxWidth="xl">
        <Button onClick={handleClick} fullWidth variant="contained">Hello World HOMEPAGE</Button>
      </Container>

    )
}