import React from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useAppCtx } from "../AppProvider"
import AnnouncementList from "../page/announcement-list"

import Login from "../page/login"
import UserResultList from "../page/user-result-list"

type Props = {
    staffOnly?: boolean
    children: JSX.Element
  }
  
  const ProtectedRoute = ({staffOnly, children }: Props) => {
    const {userInfo, action} = useAppCtx();
    const location = useLocation()
    const staffDenied = staffOnly && !action.isStaff()
    if (!userInfo.ready || staffDenied) {    
      if(staffDenied){
        action.signOut()
      }
      console.log('backTo = ', location.pathname)
      return  <Navigate to="/login" replace state={{backTo: location.pathname}}/>;
    }
  
    return children;
  }
  
const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route path="home" element={<ProtectedRoute><UserResultList/></ProtectedRoute>} />
            <Route path="announcement" element={<ProtectedRoute><AnnouncementList/>
      </ProtectedRoute>} />

        </Routes>
    );
};


export default AppRoutes