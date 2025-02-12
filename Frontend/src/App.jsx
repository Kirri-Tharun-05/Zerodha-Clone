import HomePage from './landing_page/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './landing_page/signup/SignUp'
import About from './landing_page/about/AboutPage'
import Products from './landing_page/products/Products'
import Pricing from './landing_page/pricing/Pricing'
import Support from './landing_page/support/Support'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={< Support />} />
        </Routes >
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App;
