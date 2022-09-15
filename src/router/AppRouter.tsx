import React from "react"
import {Route, Routes} from "react-router-dom"
import { RouterLayout } from "../components/RouterLayout/RouterLayout"
import { HomePage } from "../pages/home/HomePage"
import { LoginPage } from "../pages/login/LoginPage"


export const AppRouter: React.FC<{}> = () => {

    return(
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
            {/* <Route path="/login" element={<LoginPage/>}/> */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            </Route>
        </Routes>
    )

}