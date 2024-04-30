import React from 'react'



export const RecipeCard = ({ article }) => {
  
  const date = new Date(article.display_date);
  
  const day = date.getDate();

  const month = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const nameMonths = month[date.getMonth()];

  const year = date.getFullYear();

  const dateFormat = `${day} de ${nameMonths} de ${year}`;

  return (

    <article className='mod-caja-nota lugares w-100-mobile'>
      <section id className='cont-figure'>
        <a className='figure'>
          <picture id className="content-pic picture">
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
        <h4 className='com-date'>{dateFormat}</h4>
      </div>
    </article>



  )
}
