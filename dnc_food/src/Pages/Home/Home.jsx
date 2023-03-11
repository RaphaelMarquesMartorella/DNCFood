import React from 'react'
import './index.css'
import Header from '../../components/Header/Header'
import HomeSection from '../../components/HomeSection/HomeSection'

const Home = ({data}) => {
   return (
    <div>
    <header>
      <Header />
    </header>
    <section>
      {data.map((item, key) =>(
        <HomeSection data={item} key={key}/>
      ))}
      
    </section>
    

    </div>
  )
   }

export default Home