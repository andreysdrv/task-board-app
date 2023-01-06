import { Fragment } from 'react'
import { CssBaseline } from '@mui/material'
import ButtonAppBar from '../AppBar/AppBar'
import ButtonBox from '../ButtonBox/ButtonBox'
import ProjectsBox from '../ProjectsBox/ProjectBox'

export const App = () => (
  <Fragment>
    <CssBaseline />
    <ButtonAppBar />
    <ButtonBox />
    <ProjectsBox />
  </Fragment>
)
