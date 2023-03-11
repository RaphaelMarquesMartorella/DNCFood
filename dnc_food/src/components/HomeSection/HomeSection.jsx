import React from 'react'
import "./index.css"

const HomeSection = ({data}) => {
  return (
    
        <div className='food__cards'>
            <img src={data.imgPath} style={{width:"60%",
        margin:"20vh 4vh 0vh 20vh "}} alt={data.title} />
        <div className='food__titles'>
        <p>{data.title}</p>
        </div>
        </div>
    
  )
}

export default HomeSection