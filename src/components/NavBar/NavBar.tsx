import React from 'react'
import {AppBar, Box, Toolbar, Grid, Button, Typography} from '@mui/material'
import { Container, Stack} from '@mui/system'

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='fixed'>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>AlanAssange</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained">Login</Button> 
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
