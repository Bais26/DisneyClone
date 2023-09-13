import { useState } from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import Slider from './Component/Slider'
import ProductionHouse from './Component/ProductionHouse'
import Genremovielist from './Component/Genremovielist'
import Footer from './Component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (  
    <div className=''>
      <Navbar/>

      <Slider/>

      <ProductionHouse/>

      <Genremovielist/>

      <Footer/>
    </div>
  )
}

export default App
