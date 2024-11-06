import { useState } from "react"
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService"
import { useEffect } from "react"
import { AuthContext, useAuth } from './security/AuthContext'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'


export default function ListTodosComponent() {

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    const navigate = useNavigate()

    const username = authContext.username


    useEffect ( () => refreshTodos(), [])

    // const todos = [
    //     // {id:1, description:"Learn AWS", done: false, targetDate},
    //     // {id:2, description:"Learn GC", done: false, targetDate},
    //     // {id:3, description:"Learn Azure", done: false, targetDate}     
    // ]

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                console.log(response)
                setTodos(response.data)
            }
        )
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {

        console.log('clicked'+id)
        deleteTodoApi(username, id)
        .then(
            () => {
                setMessage(`Delete of todo with ${id} successful`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))
    }

    function updateTodo(id) {

        console.log('clicked'+id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo(id) {

        console.log('clicked'+id)
        navigate(`/todo/-1`)
    }

    return(
        <div className="container">
            <h1>Things you want to do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Username</td>
                        <td>Description</td>
                        <td>Is Done</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo=>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.username}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                </tr>
                        )
                    }
                    
                </tbody>
            </table>
            <div className="btn btn-success m-3" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}
