import React from 'react'
import Img_icon from "../img/img_icon.png"
import Attach from "../img/attach.png"


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <img src={Attach} alt="" />
        <input type='file' style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={Img_icon}alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
