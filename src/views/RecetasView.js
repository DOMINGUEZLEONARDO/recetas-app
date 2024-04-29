import React from 'react'
import { Header } from '../components/Header'
import { Tags } from '../components/Tags'
import { RecetasContainer } from '../containers/RecetasContainer'
import { Boton } from '../components/Boton'

export const RecetasView = () => {
    return (
        <main>
            <div className="lay-sidebar">
                <div className='sidebar__main'>
                    <Header />
                    <Tags />
                    <RecetasContainer />
                    <Boton />
                </div>
                <div className="sidebar__aside">
                    <div className='banner --desktop --large'></div>
                    <div className='banner --desktop --large'></div>
                </div>
            </div>
        </main>

    )
}
