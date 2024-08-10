import { useState } from 'react'
import './App.css'
import BannerSlider from './components/BannerSlider/BannerSlider'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import OnlineProduct from './components/OnlineProduct/OnlineProduct'
import Product from './components/Product/Product'
import Sidebar from './components/Sidebar/Sidebar'
import SignUp from './components/SignUp/SignUp'

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex w-full'>
      <div className={`h-screen z-10 fixed ${isOpen ? ' w-[10%]' : 'w-[20%]'}`}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className='w-[90%] ml-[150px] z-0'>
        <BannerSlider />
        <Product />
        <OnlineProduct isOpen={isOpen} />
        <SignUp />
        <FeaturesSection />
      </div>
    </div>

  )
}

export default App
