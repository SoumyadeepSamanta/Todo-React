import './TodoApp.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link, Navigate } from 'react-router-dom'
import LogoutComponent from './LogutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'


export default function TodoApp() {

    function AuthenticatedRoute({children}) {
        const authContext = useAuth()
        if(authContext.isAuthenticated)
            return children

        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="TodoApp">
            Todo Management Application
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                        <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent></WelcomeComponent>
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent></ListTodosComponent>
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent></TodoComponent>
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/logout' element={
                            //<AuthenticatedRoute>
                                <LogoutComponent></LogoutComponent>
                            //</AuthenticatedRoute>
                        }></Route>
                    </Routes>
                    <FooterComponent></FooterComponent>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}










