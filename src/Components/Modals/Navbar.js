import React from 'react'
import logo from '../Assets/Group.svg'
import home from '../Assets/home.svg'
import user from '../Assets/user.svg'
import transfer from '../Assets/transfer.svg'
import avatar from '../Assets/Avatar.png'
import { Link, useNavigate } from 'react-router-dom'
import { Logout } from '@mui/icons-material'
import logout from '../Assets/logout.svg'


function Navbar({role}) {
  const navigate = useNavigate();
  
  return (
    <div className='nav__container py-5  min-w-30  h-screen border-r-[1px] flex flex-col justify-between'>
        
        <div className="top__area">
          <div className="top__section px-4 flex items-center justify-between mb-8">
              <div className=""> 
                  <img src={logo} alt="LOGO" className='mr-2 h-8'/>
              </div>
              <div className="font-extrabold text-[18px]"> <span className='text-[#F89A23]'>Money</span><span className="text-[#02969C]">Matters </span> </div>
          </div>
          <div className="ml-4">
              <div className='text-[#505887] flex my-4 text-[15px] items-center cursor-pointer'>
              <img src={home} alt="icon__home" className='mr-3 ml-2 ' />
                <span onClick={() => {navigate('/dashboard/1')}}> Dashboard </span> 
              </div>
              <div className='text-[#505887] flex my-4 text-[15px] items-center cursor-pointer'>
                <img src={transfer} alt="icon__transfer" className='mr-3 ml-2 ' />
                <span onClick={() => {navigate('/transaction/1')}}>{  role === 'user' ? "Transactions" : "All Transactions"}</span>
              </div>
              <div className='text-[#505887] flex my-4 text-[15px] items-center cursor-pointer'> 
                <img src={user} alt="icon__user"  className='mr-3 ml-2 ' />
                <span onClick={() => {navigate('/dashboard/1')}}>Profile</span> 
              </div>
              
          </div>
        </div>

        <div className="bottom__area border-t-2 flex items-center justify-between px-3 pt-3">
  <div className="flex items-center">
    <img src={avatar} alt="profile pic" className='h-9 mr-2' />
    <div className="flex flex-col text-sm">
      <div className="text-[#505887] font-bold">Rhye</div>
      <div className="text-[#718EBF] text-[11px]">olivia@untitledui.com</div>
    </div>
  </div>
  
  <Link to="/" className='icon-[#505887] flex justify-end mx-15 my-4  text-[15px] items-center cursor-pointer'>
  <span onClick={() => {navigate('/dashboard/1')}}></span>
  <img src={logout} alt="icon__logout" className='mr-4 ml-10' style={{ filter: 'grayscale(100%)', opacity: '0.6 ' }} />
</Link>

</div>

    </div>
  )
}

export default Navbar