import React, { useState } from 'react'
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import TabOptions from '../../components/common/tabOptions';
const HomePage = () => {

    const [activeTab,setActiveTab]=useState("Delivery");

  return (
    <div>
        
        <Header/>
        <TabOptions/>
        {
            getCorrectScreen(activeTab)
        }
        <Footer/>
        
    </div>
  )
};
const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return<div>Delivery</div>
        case "Dining Out":
            return <div>Dining</div>
        case "Nightlife":
            return <div>Night Life</div>
        default:
            return <div>Delivery</div>
    }
}

export default HomePage;