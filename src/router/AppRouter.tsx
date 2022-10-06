import React from "react"
import {Route, Routes} from "react-router-dom"
import { RouterLayout } from "../components/RouterLayout/RouterLayout"
import { HomePage } from "../pages/home/HomePage"
import { FavoritesPage } from "../pages/favorites/FavoritesPage"
import { EnemiesPage } from "../pages/enemies/EnemiesPage"


export const AppRouter: React.FC<{}> = () => {

    return(
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/favorites" element={<FavoritesPage/>}/>
            <Route path="/enemies" element={<EnemiesPage/>}/>
            </Route>
        </Routes>
    )

}