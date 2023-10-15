import React, { FC } from 'react'
import "./mainlayout.scss"
const MainLayout:FC<{children:any}> = ({children}) => {
  return (
    <div className='layout_wrapper'>
      {
        children
      }
    </div>
  )
}

export default MainLayout