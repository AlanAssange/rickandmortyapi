import React from 'react'
import { Container } from '@mui/system';
import { Button } from '@mui/material';
// import { useNotification } from '../../context/notification.context';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { characters } from '../../api/characters';

export const HomePage: React.FC<{}> = () => {
  // const {getSuccess} = useNotification()
  // const handleClick = () => {
  //   getSuccess("WUBBA LUBBA DUB DUB")
  // }
  
  React.useEffect(() => {
    characters.getById({id: 1}).then((r) =>{
      console.log(r.data)
    }).catch((e)=>{
      console.error(e)
    })

  },[])

    return(
        <Container maxWidth="xl">
          <HeaderComponent title='Hola Mundo' description="heyhey" element={<Button fullWidth variant="contained">Rickyti Rick</Button>}/>
      </Container>

    )
}