
import { useState } from 'react'
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import AvailablePlayers from './Components/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers'

function App() {

  const [credit, setCredit] = useState(0)

  const [activeTab, setActiveTab] = useState('available')


  const handleIncreaseCredit = (c) =>{
      setCredit(credit+c)
  }

  const handleClickActiveTab = (tab) => {
    setActiveTab(tab); // Update the state with the clicked // update by 'available' or 'selected'
  };





  return (
    <>
    
      <div className='w-11/12 mx-auto'>
        <Header 
        handleIncreaseCredit={handleIncreaseCredit} 
        credit={credit}
        handleClickActiveTab={handleClickActiveTab}
        activeTab={activeTab}
        
        ></Header>

        {
          activeTab === 'available' && <AvailablePlayers></AvailablePlayers>
        }
        {
          activeTab === 'selected' && <SelectedPlayers></SelectedPlayers>
        }

      </div>


      <Footer></Footer>
    </>
  )
}

export default App
