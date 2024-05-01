import React from 'react'
import { getFormattedDate } from '../../helpers';



export const RecipeCard = ({ article }) => {
  
  const formattedDate = getFormattedDate(article.display_date)

  return (

    <article className='mod-caja-nota lugares w-100-mobile'>
      <section className='cont-figure'>
        <a className='figure'>
          <picture className="content-pic picture">
            <img
              className='content-img'
              src={article.promo_items.basic.url}
              alt={article.headlines.basic}
            />
          </picture>
        </a>
      </section>
      <div className='mod-caja-nota__descrip'>
        <h2 className='com-title-acu'>
          <a>
            <b>{article.headlines.basic}</b>
          </a>
        </h2>
        <h4 className='com-date'>{formattedDate}</h4>
      </div>
    </article>
  )
}
