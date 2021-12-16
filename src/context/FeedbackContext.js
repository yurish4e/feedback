import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([{
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
        id: 2,
        rating: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const handleDelete = (id) => {
        setFeedback(feedback.filter(el => el.id != id))
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }
    // Update feedback item
    const updateFeedback = (id, updItem) => {
        console.log(id, updItem)
        setFeedback(feedback.map(el => el.id === id ? { ...el, ...updItem } : el))
    }
    // Set Items to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext