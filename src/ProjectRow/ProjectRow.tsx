import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ProjectRow({
  projectName,
  projectDescription,
}: {
  projectName: string
  projectDescription: string
}) {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {projectName}
        </Typography>
        <Typography variant='body2'>{projectDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
