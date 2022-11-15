import { FaSignInAlt, FaSignOutAlt, FaUser, FaBook, FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className="dropdown">
        <Link to='/'>
          <button class="btn">
            <FaBars /> Word Lists
          </button>
        </Link>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <ul>
        {user ? (<>
          <li>
            <Link to='/notes'>
              <FaBook /> Notebook
            </Link>
          </li>
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li></>) : (<>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li></>)
        }

      </ul >
    </header >
  )
}

export default Header