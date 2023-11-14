import '../Styles/Navbar.css';
import Logo from '../Assets/green-tea.png';
import Settings from '../Assets/settings.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Profile from './Profile/Profile';
import { useAuth } from '../Utils/auth';


const Navbar = () => {
  const { authenticated } = useAuth();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  let navigate = useNavigate();

  return (
    <div className='Navbar'>
      <div className="Name">
        <img src={Logo} alt="TeaJourney Logo" />
        <h1>TeaJourney</h1>
      </div>
      <div className="Account">
        {!authenticated && (
          <>
            <button onClick={() => { navigate('/login') }}>Login</button>
          </>
        )}
        {authenticated && (
          <>
            <img src={Settings} alt="Account" onClick={() => { setIsProfileModalOpen(true) }} />
          </>
        )}
        {isProfileModalOpen && (
          <Profile setIsProfileModalOpen={setIsProfileModalOpen} />
        )}
      </div>
    </div>
  )
}

export default Navbar
