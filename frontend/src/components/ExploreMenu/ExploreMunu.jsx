import React from 'react'
import './ExploreMunu.css'
import { menu_list } from '../../assets/assets'

const ExploreMunu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-munu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy our customers.</p>
          <div className="explore-menu-list">
              {menu_list.map((item,index) => {
                  return (
                      <div key={index} onClick={()=>{setCategory(prev => prev===item.menu_name? "All":item.menu_name)}}  className="explore-menu-list-item">
                          <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                          <p>{item.menu_name}</p>
                      </div>
                  )
              })}
        </div>
      <hr />
    </div>
  )
}

export default ExploreMunu
