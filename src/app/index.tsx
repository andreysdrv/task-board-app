import { Fragment } from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import ButtonAppBar from '../AppBar/AppBar'
import MainPage from '../MainPage/MainPage'
import InputsGroup from '../InputsGroup/InputsGroup'

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/new-project' element={<InputsGroup />}></Route>
      </Routes>
    </Fragment>
  )
}
