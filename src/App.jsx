
import { useState } from 'react'
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import AvailablePlayers from './Components/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers'

function App() {

  const [credit, setCredit] = useState(0)

  const [activeTab, setActiveTab] = useState('available')

  const [select, setSelect] = useState([])


  const handleIncreaseCredit = (c) => {
    setCredit(credit + c)
  }

  const handleClickActiveTab = (tab) => {
    setActiveTab(tab); // Update the state with the clicked // update by 'available' or 'selected'
  };

  const handleClickSelect = (player) => {
    if (select.length === 6) {
      alert('You can not select more than 6 players');
      return;
    }
    else if (credit < player.biddingPrice) {
      alert('You have not enough credit')
      return;
    }
    else {

      const isExist = select.find(previousPlayer => previousPlayer.playerId === player.playerId)
      if (isExist) {
        alert('You can not select same player twice');
        return;
      }
      else {
        const newSelect = [...select, player];
        setSelect(newSelect);
        handleIncreaseCredit(-player.biddingPrice);
      }


    }

  };
  // console.log(select.length);



  const handleDeletePlayer = (playerId) => {
    const newSelect = select.filter(player => player.playerId !== playerId);
    setSelect(newSelect);

    // delete er sathe sathe coin increase korte chaile nicher line CommentOut korte hobe.
    //and (playerId, player)  *player* arguement receive korte hobe SelectPlayer er button click theke
    // handleIncreaseCredit(player.biddingPrice);
  }





  return (
    <>

      <div className='w-11/12 mx-auto'>
        <Header
          handleIncreaseCredit={handleIncreaseCredit}
          credit={credit}
          handleClickActiveTab={handleClickActiveTab}
          activeTab={activeTab}

          selectLength={select.length}

        ></Header>

        {
          activeTab === 'available' && <AvailablePlayers handleClickSelect={handleClickSelect}></AvailablePlayers>
        }
        {
          activeTab === 'selected' && <SelectedPlayers selectPlayer={select} handleDeletePlayer={handleDeletePlayer} handleClickActiveTab={handleClickActiveTab}></SelectedPlayers>
        }

      </div>


      <Footer></Footer>
    </>
  )
}

export default App
