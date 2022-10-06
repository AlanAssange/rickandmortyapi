import React from 'react'
import {AppBar, Box, Toolbar, Grid, Button, Typography} from '@mui/material'
import { Container, Stack} from '@mui/system'
import { useNavigate } from 'react-router-dom'

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='sticky'>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>AlanAssange</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={()=> navigate("favorites")}>Favorites</Button> 
                  <Button variant="outlined" onClick={()=> navigate("enemies")}>Enemies</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
