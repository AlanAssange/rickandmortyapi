import React from 'react'
import {Container, Button } from '@mui/material';
import { FavEnemComponent } from '../../components/Header/FavEnemComponent';
import { useNavigate } from 'react-router-dom'

export const EnemiesPage = () => {

    const navigate = useNavigate()

  return (
    <Container sx={{mt: 9}} maxWidth="xl">
    <FavEnemComponent title='Enemies ' description="here you can watch your enemies" element={<Button fullWidth variant="contained">My characters</Button>}/>
    <Button fullWidth variant="contained" onClick={()=> navigate("/")}>Back to the list</Button>
    </Container>
  )
}
