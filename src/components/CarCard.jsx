import React, { useEffect, useState } from 'react';
import './style.scss'

function CarCard({ name, img, check, index, changeState }) {
    

   

  return (
    <div className='card'>
        <div className='name'>{name}</div>
        <img src={img} alt=''></img>
        <div className='checkBox' onClick={() => changeState(index)}>
            {check 
                ? 
                <svg width="133" height="97" viewBox="0 0 133 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10L66.7101 79.145C74.7115 88.9009 89.6369 88.9009 97.6383 79.145L123 48.2222" stroke="#00FF29" strokeWidth="20" strokeLinecap="round"/>
                </svg>
                :
                <svg width="113" height="113" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10L103 103M103 10L10 103" stroke="#FF0000" strokeWidth="20" strokeLinecap="round"/>
                </svg>
            }
        </div>
    </div>
  );
}

export default CarCard;