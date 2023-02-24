import React from 'react'
import './body.css'
const Body = (props) => {
  return (
    <>
      <div className='bodydiv'>
           <div className='bodydivchild1' style={{backgroundColor:props.colorcode}}></div>
           <div className='bodydivchild2'>
            <h3>{props.colorcode}</h3>
           </div>
           <div className='bodydivchild3'  style={{color:props.colorcode}}> <p>{props.bgcolorName}</p> </div>
           
        </div>
    </>
  )
}

export default Body
