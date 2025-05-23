import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating=4}) => {
  return (
    <div className='flex flex-row'>
        {Array(5).fill('').map((_, index) => (
             <img src={ rating > index ?assets.starIconFilled:assets.starIconOutlined} alt="star-icon" className='<w-4 className="5"></w-4> h-4.5' />
        ))}
    </div>
  )
}

export default StarRating