import { Link, Outlet } from "react-router-dom"

export default function App() {
    return (
      <div className="h-screen grid place-content-center">
        <Outlet />      
      </div>
    )
}