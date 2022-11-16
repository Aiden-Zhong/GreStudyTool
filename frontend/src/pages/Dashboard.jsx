import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getGoals } from "../features/goals/goalSlice"
import Pagination from "../components/Pagination"


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector((state) => state.goals)

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
        <h1>Happy Learning</h1>
        <p>{user && user.name === "姚溪楠" ? "爱の单词表" : "Created for Nancy Yao by Yingjie Zhong"}</p>
      </section>
      <section className="content">
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