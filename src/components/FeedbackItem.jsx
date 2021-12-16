import { useState } from "react"
import Card from "./shared/Card"
import propTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({el}) {
    const { handleDelete, editFeedback} = useContext(FeedbackContext)

    
   
    return (
        <Card className="card">
            <div className="num-display">{el.rating}</div>
            <button onClick={()=>handleDelete(el.id)} className="close" ><FaTimes color="purple"/></button>
            <button className="edit" onClick={()=>editFeedback(el)}>
                <FaEdit color="purple"></FaEdit>
            </button>
            <div className="text-display">{el.text}</div>
            
        </Card>
    )
}
FeedbackItem.propTypes = {
    el: propTypes.object.isRequired
}

export default FeedbackItem
