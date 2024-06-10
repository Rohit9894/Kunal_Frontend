import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import YourBank from "./YourBank"


function AllRoutes() {


    return (
        <>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/yourBank" element={<YourBank />} />
            </Routes>

        </>
    )
}

export default AllRoutes
