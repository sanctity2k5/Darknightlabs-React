import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProjectManager from './pages/project-manager/ProjectManager'
import { ROUTER } from './utils/routes/routes'
import './App.scss'
import Layout from './components/layout/Layout'
import Synergies from "./pages/synergies/Synergies";
import Login from './pages/login/Login'
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import Home from './pages/home/home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to={ROUTER.projectManager} />} />
          <Route exact path="/synergies" element={<Synergies />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/home" element={<Home />} />    

          <Route element={<Layout />}>
            <Route path={ROUTER.projectManager} element={<ProjectManager />} />
          </Route>

          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
