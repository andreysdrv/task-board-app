import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function ButtonBox() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', m: 2 }}>
      <Button variant='contained' size='large'>
        Создать проект
      </Button>
    </Box>
  )
}
