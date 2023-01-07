import Box from '@mui/material/Box'
import ProjectRow from '../ProjectRow/ProjectRow'

export default function ProjectsBox() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
      <ProjectRow projectName='АНДОР' projectDescription='СЕРИАЛ ПО ЗВ НА ДИСНЕЙ' />
      <ProjectRow projectName='СЕРГЕЙ' projectDescription='ЛУЧШИЙ ЧЕЛОВЕК В МИРЕ' />
      <ProjectRow projectName='ВАРЗОН' projectDescription='ВЗРЫВ ОЧКА' />
    </Box>
  )
}
