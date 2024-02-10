import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './assets/homepage'
import Login from './assets/footer/login'
import Register from './assets/footer/Register'
import Mainform from './assets/footer/Mainform'
function App (){
  return<BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/templates' element={<Homepage/>}></Route>
    <Route path='/resume' element={<Homepage/>}></Route>
    <Route path='/resumeBuilder' element={<Mainform/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App 
