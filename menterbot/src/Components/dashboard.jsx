import React from 'react'
// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
// import ROLE from '../common/role';
import '../css/dashboard.css'; // Import the CSS file
import logo from "../assets/logo.png"

const Dashboard = () => {
  return (

    <div className='dashboard-container'>
      <aside className='dashboard-aside'>
        <img src={logo} alt="Logo" className='dashboard-logo' />
        <nav className='dashboard-nav'>
          <Link to={""} className='nav-link'>Dashboard</Link>
        </nav>
      </aside>

      <main className='dashboard-main'>
        <h1>Dashboard</h1>
        <h2>Welcome back, OM</h2>
        <div className=''></div>

        <div className='dashboard-body'>
          <h3>Meeting Request</h3>
          <div className=''>
            <a href="https://mentorbot.in/students/meeting-requests/create" class="button orange-btn">Add Meeting Request</a>
          </div>
          <h3>Recommended Courses</h3>
          <h3>Your Courses</h3>
        </div>
      </main>

    </div>

  )
}

export default Dashboard
