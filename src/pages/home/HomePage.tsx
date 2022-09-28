import React from 'react'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
// import { useNotification } from '../../context/notification.context';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { characters } from '../../api/characters';
import { CardComponent } from '../../components/Cards/CardComponent';
import { TypeCharacter } from '../../config/character.interface';

export const HomePage: React.FC<{}> = () => {

  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)

  // const {getSuccess} = useNotification()
  // const handleClick = () => {
  //   getSuccess("WUBBA LUBBA DUB DUB")
  // }
  

  React.useEffect(() => {
    characters.getAll({page: 1}).then((r) =>{
      setAllCharacters(r.data.results)
    }).catch((e)=>{
      console.error(e)
    })

  },[])

    return(
        <Container maxWidth="xl">
          <HeaderComponent title='Hola Mundo' description="heyhey" element={<Button fullWidth variant="contained">Rickyti Rick</Button>}/>
          <div>
            {
              allCharacters?.length !== 0 ? (
                <Grid container spacing={2} direction="row">
                  {allCharacters!.map((character) =>(
                    <Grid item xs={3}>
                    <CardComponent key={character.id} image={character.image} name={character.name} species= {character.species} status= {character.status} />
                   </Grid>
                  ))}
                </Grid>

              ) : ""
            }
         
          </div>
      </Container>

    )
}