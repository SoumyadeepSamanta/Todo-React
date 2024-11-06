import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

export default function FooterComponent() {

    const authContext = useContext(AuthContext)
    //console.log(`footer component ${authContext.number}`)

    return(
        <footer className="footer">
            <div className='container'>
                Your Footer
            </div>
        </footer>
    )
}