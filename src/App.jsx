import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './assets/homepage'
import Login from './assets/footer/login'
import Register from './assets/footer/Register'
import Mainform from './assets/footer/Mainform'
import Layout from './assets/layout'
import RequireAuth from './requireAuth'
import Resume from './assets/Resume'
import Form0 from './assets/footer/Form0'
function App (){
  return<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/templates' element={<Homepage/>}></Route>
        <Route element={<RequireAuth/>}>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/resumebuilder' element={<Mainform/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/form0' element={<Form0></Form0>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App 
