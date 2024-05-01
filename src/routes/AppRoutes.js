import { Route, Routes } from "react-router-dom"
import { RecipeView } from "../views/RecipeView";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<RecipeView />}/>
            <Route path='tema/:id' element={<h1>Pagina en construccion...</h1>}/>
        </Routes>
    )
};