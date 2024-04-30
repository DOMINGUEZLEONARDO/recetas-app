import React from 'react'
import { Header } from '../components/header'
import { Tags } from '../components/tags'
import { RecipeContainer } from '../containers/recipes'
import { Button } from '../components/button/index'


export const RecipeView = () => {
    return (
        <main>
            <div className="lay-sidebar">
                <div className='sidebar__main'>
                    <Header />
                    <Tags />
                    <RecipeContainer />
                    <Button />
                </div>
                <div className="sidebar__aside">
                    <div className='banner --desktop --large'></div>
                    <div className='banner --desktop --large'></div>
                </div>
            </div>
        </main>

    )
}
