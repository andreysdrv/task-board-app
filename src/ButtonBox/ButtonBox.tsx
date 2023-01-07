import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function ButtonBox() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', m: 2 }}>
      <Link style={{ textDecoration: 'none' }} to='/new-project'>
        <Button variant='contained' size='large'>
          Создать проект
        </Button>
      </Link>
    </Box>
  )
}
