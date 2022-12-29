import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import Signin from '../Components/Auth/Signin'
import Signup from '../Components/Auth/Signup'
import Dashboard from '../Components/Dashboard'
import ViewTask from '../Components/ViewTask'
import Report from '../Components/Report'
import AddMember from '../Components/AddMembers'
import Team from '../Components/Team'
import AddTask from '../Components/AddTask'
import Project from '../Components/Project'
import Profile from '../Components/Profile/Profile'
import ViewProjects from '../Components/ViewProjects'
import RouteGuard from '../RouteGuard'

import React from 'react'

function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signin" element={<Signin />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route element={ <RouteGuard/> }>
        <Route path="/dashboard/:role" element={<Dashboard />} />
        <Route path="/view-task" element={<ViewTask />} />
        <Route path="/report" element={<Report />} />
        <Route path="/perform/add-members" element={<AddMember />} />
        <Route path="/perform/add-task" element={<AddTask />} />
        <Route path="/view/team" element={<Team />} />
        <Route path="/create/project" element={<Project />} />
        <Route path="/view/profile" element={<Profile />} />
        <Route path="/view/projects" element={<ViewProjects />} />
      </Route>
    </Routes>
  )
}

export default index