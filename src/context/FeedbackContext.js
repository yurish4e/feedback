import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&order=desc');
        const data = await response.json();
        setFeedback(data)
        setIsLoading(false)
    }

    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //DELETE
    const handleDelete = async (id) => {
        await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })
        setFeedback(feedback.filter(el => el.id !== id)) // Remove our element from state/UI
    }
    //ADD
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json() // respons returns added element and we can show it in UI
        setFeedback([data, ...feedback]) // update state to show added element
    }
    // Update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json() // respons returns added element and we can show it in UI

        setFeedback(feedback.map(el => el.id === id ? { ...el, ...data } : el))
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
        isLoading,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext