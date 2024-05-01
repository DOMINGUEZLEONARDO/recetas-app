import React, { useContext } from 'react'
import { RecipeCard } from '../../components/recipe-card';
import { RecipeContext } from '../../provider/RecipeContext'

export const RecipeContainer = () => {

    const { filteredArticles } = useContext(RecipeContext);
    return (
        <section className='row-gap-deskxl-3 hlp-degrade'>
            {
                filteredArticles.map(article => (
                    <RecipeCard key={article._id} article={article}
                />))
            }
        </section>
    )
}
