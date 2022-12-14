import { Divider, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
}


export const HeaderComponent: React.FC<HeaderProps> = ({title, description, element,}) => {
  return (
    <div>
    <Box sx={{width:"100%", height:"350px"}}>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height:"100%"}}>
      <Grid item xs={5}>
      <Grid container direction="column" justifyContent="center" alignItems="center" sx={{height:"100%"}}>
      <Grid item>
        <Typography variant="h1">{title}</Typography>
      </Grid>
      <Grid item sx={{mt: 2}}>
        <Typography>{description}</Typography>
      </Grid>
      <TextField sx={{mt: 3}}  id="standard-basic" fullWidth label="search your favorites (e.g: Rick Sanchez)" variant="standard" />
      </Grid>
      </Grid>
      </Grid>
    </Box>
    <Divider/>
    </div>
  )
}
