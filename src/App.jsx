import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './assets/homepage'
import Login from './assets/footer/login'
import Register from './assets/footer/Register'
import Mainform from './assets/footer/Mainform'
import Layout from './assets/layout'
import RequireAuth from './requireAuth'
function App (){
  return<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/templates' element={<Homepage/>}></Route>
        <Route path='/resume' element={<Homepage/>}></Route>
        <Route element={<RequireAuth/>}>
          <Route path='/resumebuilder' element={<Mainform/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App 
