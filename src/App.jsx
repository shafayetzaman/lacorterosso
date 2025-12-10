import { Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Gallery from './Gallery.jsx';
import PrivateDining from './PrivateDining.jsx';
import Story from './Story.jsx';
import Contacts from './Contacts.jsx';
import Reserve from './Reserve.jsx';
import Footer from './Footer.jsx';
function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/story' element={<Story />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/privateDining' element={<PrivateDining />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
