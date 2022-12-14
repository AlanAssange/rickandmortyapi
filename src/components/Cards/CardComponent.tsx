import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'



type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
}

export const CardComponent: React.FC<CardProps>= ({image, name, species, status}) => {


  return (
    <Card>
        <CardMedia component="img" height="194" image={image} alt="paellapa"/>
        <CardContent>
            <Typography variant="h4" sx={{mb:1.5}}>{name}</Typography>
            <Divider/>
            <Typography sx={{mt:1.5}}>Species: {species}</Typography>
            <Typography sx={{mt:1.5}}>Status: {status}</Typography>
    
        </CardContent>
        <CardActions>
            <Button fullWidth variant="contained" size="small">Add as favorite</Button>
            <Button fullWidth variant="outlined" size="small">Add as enemy</Button>
        </CardActions>
    </Card>
  )
}
 