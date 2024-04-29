import React, { useContext } from 'react'
import { RecetaCard } from '../components/RecetaCard'
import { RecetasContext } from '../Provider/RecetasContext'

export const RecetasContainer = () => {

    const { notas } = useContext(RecetasContext);
    return (
        <section className='row-gap-deskxl-3 hlp-degrade'>
            {
                notas.map(nota => (
                    <RecetaCard key={nota.id} nota={nota} />))

            }
        </section>
    )
}
