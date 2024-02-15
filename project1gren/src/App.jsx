import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/About' element={<About/>}/>
      
      <Route path='/Contact' element={<Contact/>}/>
      
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
