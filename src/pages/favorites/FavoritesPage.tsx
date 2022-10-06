import React from 'react'
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom'
import { FavEnemComponent } from '../../components/Header/FavEnemComponent';


export const FavoritesPage: React.FC<{}> = () => {
  const navigate = useNavigate()


    return(
        <Container sx={{mt: 9}} maxWidth="xl">
        <FavEnemComponent title='Favorites' description="here you can watch your favorites" element={<Button fullWidth variant="contained">My characters</Button>}/>
        <Button fullWidth variant="contained" onClick={()=> navigate("/")}>Back to the list</Button>
      </Container>

    )
}