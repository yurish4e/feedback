import {  useState, useEffect } from "react"
import { useContext } from "react"
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const { addFeedback,updateFeedback, feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleText=(e)=> {
        setText(e.target.value)
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !=='' && text.trim().length <=2) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else {
            setBtnDisabled(false)
            setMessage(null)
        }
    }
    const handlerSubmit = (e)=>{
        e.preventDefault();
        console.log(feedbackEdit)
        const newFeedback = {
            text,
            rating,
            
        }
        if(feedbackEdit.edit) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
        setText('')
    }
    return (
            <Card>
                <form onSubmit={handlerSubmit}>
                    <h2>How would you rate us?</h2>
                    <RatingSelect select={(rating)=>{setRating(rating)}}/>
                    <div className="input-group">
                        <input onChange={(e)=>handleText(e)} type="text" value={text} placeholder="Write a review" />
                        <Button type="submit" isDisabled={btnDisabled}>
                            Send
                        </Button>
                    </div>
                    {message&& <div className="message">{message}</div>}
                </form>
            </Card>
    )
}

export default FeedbackForm
