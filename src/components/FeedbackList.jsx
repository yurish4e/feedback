import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from "react"
import FeedbackContext from '../context/FeedbackContext'
import Spinner from "./shared/Spinner"


function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext)

    if( !isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }

    return isLoading? <Spinner/> : (
        
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map(el=>(
                <motion.div key={el.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
                <FeedbackItem key={el.id} el={el}/>
                </motion.div>
                ))}
                </AnimatePresence>
        </div>
    )
   
}

export default FeedbackList
