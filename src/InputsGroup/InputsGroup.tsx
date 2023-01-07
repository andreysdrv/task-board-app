import { Box, Container, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function InputsGroup() {
  const navigate = useNavigate()

  const handleButtonBack = () => {
    navigate('/')
  }

  return (
    <Container maxWidth='sm'>
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', m: 2 }}>
        <TextField id='filled-basic' label='Название проекта' variant='filled' sx={{ mt: 2 }} />
        <TextField id='filled-basic' label='Категория' variant='filled' sx={{ mt: 2 }} />
        <Box
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2 }}
        >
          <Button
            variant='outlined'
            size='large'
            sx={{ mt: 2, width: '30vw' }}
            onClick={handleButtonBack}
          >
            Назад
          </Button>
          <Button variant='contained' size='large' sx={{ mt: 2, width: '30vw' }}>
            Создать
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
