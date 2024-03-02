import {Routes,Route} from "react-router-dom"
import { UserContextProvider } from "../context/UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Nav from "./components/Nav"
import {Toaster} from "react-hot-toast"
import DashBord from "./pages/DashBord"
//axios.defaults.baseURL="http://localhost:5000"
//axios.defaults.withCredentials=true
function App() {

return (
  <UserContextProvider>

    
    <Nav/>
    <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dash" element={<DashBord/>} />
          </Routes >
          
  </UserContextProvider>
)
}

export default App
