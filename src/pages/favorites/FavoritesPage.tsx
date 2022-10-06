import React from 'react'
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom'
import { HeaderComponent } from '../../components/Header/HeaderComponent';


export const FavoritesPage: React.FC<{}> = () => {
  const navigate = useNavigate()


    return(
        <Container sx={{mt: 9}} maxWidth="xl">
        <HeaderComponent title='Favorites' description="here you can watch your favorites" element={<Button fullWidth variant="contained">My characters</Button>}/>
        <Button fullWidth variant="contained" onClick={()=> navigate("/")}>Back to the list</Button>
      </Container>

    )
}