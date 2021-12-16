
import { useState } from "react"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import { FeedbackProvider } from './context/FeedbackContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/About"


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)


    return (
        <>
            <FeedbackProvider>
                <Router>
                    <Header text="Hello world!" />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }>

                            </Route>
                            <Route path="/about" element={<About />}></Route>
                        </Routes>
                    </div>
                </Router>
            </FeedbackProvider>
        </>
    )
}

export default App
