import React from 'react'
import {AiFillStar, AiOutlineStar, BsStarHalf} from 'react-icons/all'

const Rating = ({value, text}) => {
    return (
        <div className="rating">
            <span>
                {value >= 1 ? <AiFillStar className="ratings" /> : value >= 0.5 ? <BsStarHalf className="ratings"/> : <AiOutlineStar className="ratings"/>}
                {value >= 2 ? <AiFillStar className="ratings" /> : value >= 1.5 ? <BsStarHalf className="ratings"/> : <AiOutlineStar className="ratings"/>}
                {value >= 3 ? <AiFillStar className="ratings" /> : value >= 2.5 ? <BsStarHalf className="ratings"/> : <AiOutlineStar className="ratings"/>}
                {value >= 4 ? <AiFillStar className="ratings" /> : value >= 3.5 ? <BsStarHalf className="ratings"/> : <AiOutlineStar className="ratings"/>}
                {value >= 5 ? <AiFillStar className="ratings" /> : value >= 4.5 ? <BsStarHalf className="ratings"/> : <AiOutlineStar className="ratings"/>}
            </span>
            <span>{text && text}</span>
        </div>
    )
}

export default Rating
