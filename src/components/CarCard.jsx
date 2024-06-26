import React, { useEffect, useState } from 'react';
import './style.scss'

function CarCard({ name, img, check, index, changeState }) {

  return (
    <div className='card'>
        <div className='name'>{name}</div>
        <div className='imgContainer' style={{backgroundImage: `url(${img})`}}/>
        
        <div className='checkBox' onClick={() => changeState(index)}>
            {check 
                ? 
                <svg className='cross' width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7L64 64M64 7L7 64" stroke="#FF0000" stroke-width="13" stroke-linecap="round"/>
                </svg>

                :
                <svg width="90" height="71" viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83 7L38.3452 62.1953C36.344 64.6689 32.5721 64.6689 30.5709 62.1953L7 33.0606" stroke="#00FF29" stroke-width="13" stroke-linecap="round"/>
                </svg>

            }
        </div>
    </div>
  );
}

export default CarCard;