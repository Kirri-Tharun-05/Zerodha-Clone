import React from 'react'
import HomePage from './landing_page/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './landing_page/about/AboutPage'
import Products from './landing_page/products/Products'
import Pricing from './landing_page/pricing/Pricing'
import Support from './landing_page/support/Support'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import PageNotFound from './landing_page/PageNotFound'
import ScrollToTop from "./landing_page/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={< Support />} />
          <Route path='*' element={< PageNotFound />} />
        </Routes >
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App;
