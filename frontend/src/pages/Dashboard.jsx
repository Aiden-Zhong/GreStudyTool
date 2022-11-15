import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from "../components/GoalForm"
import GoalItem from "../components/GoalItem"
import Spinner from '../components/Spinner'
import { getGoals } from "../features/goals/goalSlice"
import Pagination from "../components/Pagination"


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <div>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>{user && user.name === "姚溪楠" ? "爱の单词表" : "给西兰花做的单词表"}</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (<div className="goals">
          {goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} />
          ))}
        </div>) : (<h3>You have not set any goals</h3>)}
        <h1>Scroll to see the words</h1>
      </section>
      <section className="content">
        <div>
          {/* {words_array.map((word) => (
            <WordItem English_word={JSON.parse(JSON.stringify(word)).English}
              Chinese_word={JSON.parse(JSON.stringify(word)).Chinese} />
          ))} */}
          <Pagination itemsPerPage={300} />
        </div>
      </section>
    </div>
  )
}

export default Dashboard