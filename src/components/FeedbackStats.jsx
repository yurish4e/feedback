import { useContext } from "react"
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)

    let avg = feedback.reduce((acc,el)=>{return acc+el.rating}, 0)/feedback.length;
    avg = avg.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            {feedback.length?<h4>Avarage Rating: {avg}</h4>:<h4>No raitings</h4>}
        </div>
    )
}

export default FeedbackStats
