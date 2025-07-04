import { useState } from 'react'
import './App.css'
import Homedemopage from './homefolder/Homedemo.jsx'
import AboutUsPage from './sericefolder/Service.jsx';
import ServicesPage from './Blog.jsx';
import ContactPage from './contact.jsx';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Scrollingup from './Scrolling.js';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ScrollToTop />
      <Scrollingup/>
      <Routes>
      <Route path="/" element={<Homedemopage/>} />
      <Route path="/services" element={<AboutUsPage/>} />
      <Route path="/blog" element={<ServicesPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  )
}

export default App
