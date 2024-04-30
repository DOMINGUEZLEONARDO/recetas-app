import React, { useContext } from 'react'
import { RecipeCard } from '../../components/recipe-card';
import { RecipeContext } from '../../provider/RecipeContext'

export const RecipeContainer = () => {

    const { articles } = useContext(RecipeContext);
    return (
        <section className='row-gap-deskxl-3 hlp-degrade'>
            {
                articles.map(article => (
                    <RecipeCard key={article.id} article={article} />))

            }
        </section>
    )
}
