import './TodoApp.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {retrieveHelloWorldBean, retrieveHelloWorldPathVariable} from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent() {

    const {username} = useParams()

    const [message, setMessage] = useState('')

    const authContext = useAuth()

    console.log(username)

    function callHelloWorldRestApi() {

        console.log('called')
        
        //axios - to call rest api from react
        // axios.get("http://localhost:8080/hello-world")
        // .then((response) => successfulResponse(response))
        // .catch((error) => errorResponse(error))
        // .finally(() => console.log('cleanup'))

        // retrieveHelloWorldBean()
        // .then((response) => successfulResponse(response))
        // .catch((error) => errorResponse(error))
        // .finally(() => console.log('cleanup'))

        retrieveHelloWorldPathVariable('buju', authContext.token)
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response) {

        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {

        console.log(error)
    }

    return(
        <div className="Welcome">
            <h1>Welcome Mofo {username}</h1>
            <div>
                Manage Your todos <Link to='/todos'>Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call hello world REST API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}
