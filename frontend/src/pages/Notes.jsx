import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from "../components/GoalForm"
import Spinner from '../components/Spinner'
import Pagination from "../components/Pagination"
import { getNotes } from "../features/words/noteSlice"
import WordItem from "../components/WordItem"
import background from '../img/yxn2.jpg'


const divStyle = {
  width: '100%',
  height: '1300px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};

function Notes() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { notes, isLoading, isError, message } = useSelector((state) => state.notes)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }
        if (!user) {
            navigate('/login')
        }

        dispatch(getNotes())

    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div style={divStyle}>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>爱の单词表笔记本</p>
            </section>
            <GoalForm />
            <section className="content">
                {notes.length > 0 ? (<div className="goals">
                    {notes.map((note) => (
                        <WordItem key={note._id} id={note._id} English_word={note.EN_text} Chinese_word={note.CN_text}/>
                    ))}
                </div>) : (<h3>You have not set any custom words</h3>)}
            </section>
        </div>
    )
}

export default Notes