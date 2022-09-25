import React from 'react'
import { Container } from '@mui/system';
import { Button } from '@mui/material';
// import { useNotification } from '../../context/notification.context';
import { HeaderComponent } from '../../components/Header/HeaderComponent';

export const HomePage: React.FC<{}> = () => {
  // const {getSuccess} = useNotification()
  // const handleClick = () => {
  //   getSuccess("WUBBA LUBBA DUB DUB")
  // }
  

    return(
        <Container maxWidth="xl">
          <HeaderComponent title='Hola Mundo' description="heyhey" element={<Button fullWidth variant="contained">Rickyti Rick</Button>}/>
      </Container>

    )
}